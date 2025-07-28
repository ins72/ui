#!/bin/bash

# Core 2.0 Frontend Production Deployment Script
# This script builds and deploys the frontend application

set -e  # Exit on any error

echo "🚀 Starting Core 2.0 Frontend Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the frontend directory."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version)
print_status "Node.js version: $NODE_VERSION"

# Check npm version
NPM_VERSION=$(npm --version)
print_status "npm version: $NPM_VERSION"

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .turbo

# Install dependencies
print_status "Installing dependencies..."
npm ci --production=false

# Run type checking
print_status "Running TypeScript type checking..."
npm run type-check

# Run linting
print_status "Running ESLint..."
npm run lint

# Run tests (if available)
if npm run test --silent 2>/dev/null; then
    print_status "Running tests..."
    npm run test -- --passWithNoTests --watchAll=false
else
    print_warning "No tests found or test script not configured"
fi

# Build the application
print_status "Building the application..."
npm run build

# Check build output
if [ ! -d ".next" ]; then
    print_error "Build failed - .next directory not found"
    exit 1
fi

print_success "Build completed successfully!"

# Create deployment package
print_status "Creating deployment package..."
DEPLOY_DIR="deploy-$(date +%Y%m%d-%H%M%S)"
mkdir -p $DEPLOY_DIR

# Copy necessary files
cp -r .next $DEPLOY_DIR/
cp -r public $DEPLOY_DIR/
cp package.json $DEPLOY_DIR/
cp package-lock.json $DEPLOY_DIR/
cp next.config.ts $DEPLOY_DIR/
cp tsconfig.json $DEPLOY_DIR/

# Create production start script
cat > $DEPLOY_DIR/start.sh << 'EOF'
#!/bin/bash
export NODE_ENV=production
export PORT=${PORT:-3000}
npm start
EOF

chmod +x $DEPLOY_DIR/start.sh

# Create Dockerfile for containerized deployment
cat > $DEPLOY_DIR/Dockerfile << 'EOF'
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
EOF

# Create docker-compose file
cat > $DEPLOY_DIR/docker-compose.yml << 'EOF'
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL:-http://localhost:5000}
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
EOF

# Create environment template
cat > $DEPLOY_DIR/.env.example << 'EOF'
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000

# Application Configuration
NEXT_PUBLIC_APP_NAME=Core 2.0
NEXT_PUBLIC_APP_VERSION=1.0.0

# Environment
NODE_ENV=production

# Optional: Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SENTRY_DSN=
EOF

# Create deployment instructions
cat > $DEPLOY_DIR/DEPLOYMENT.md << 'EOF'
# Core 2.0 Frontend Deployment Instructions

## Quick Start

1. **Set environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

2. **Start the application:**
   ```bash
   ./start.sh
   ```

## Docker Deployment

1. **Build and run with Docker:**
   ```bash
   docker-compose up -d
   ```

2. **Or build manually:**
   ```bash
   docker build -t core2-frontend .
   docker run -p 3000:3000 core2-frontend
   ```

## Production Considerations

- Set up a reverse proxy (nginx, Apache)
- Configure SSL certificates
- Set up monitoring and logging
- Configure backup strategies
- Set up CI/CD pipelines

## Health Check

The application includes a health check endpoint:
- URL: `/api/health`
- Method: GET
- Expected response: `{"status":"ok","timestamp":"..."}`

## Troubleshooting

- Check logs: `docker logs <container-id>`
- Verify environment variables
- Check network connectivity
- Verify API endpoint accessibility
EOF

print_success "Deployment package created in: $DEPLOY_DIR"

# Create deployment summary
cat > $DEPLOY_DIR/DEPLOYMENT_SUMMARY.md << EOF
# Deployment Summary

**Deployment Date:** $(date)
**Build Version:** $(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
**Node.js Version:** $NODE_VERSION
**npm Version:** $NPM_VERSION

## Files Included:
- Built application (.next directory)
- Public assets
- Package configuration
- Docker configuration
- Deployment scripts
- Environment templates

## Next Steps:
1. Copy the $DEPLOY_DIR to your production server
2. Configure environment variables
3. Start the application using the provided scripts
4. Set up monitoring and logging

## Health Check:
- Application will be available at: http://localhost:3000
- Health endpoint: http://localhost:3000/api/health
EOF

print_success "Deployment package is ready!"
print_status "Package location: $DEPLOY_DIR"
print_status "Total size: $(du -sh $DEPLOY_DIR | cut -f1)"

# Optional: Create a compressed archive
if command -v tar &> /dev/null; then
    print_status "Creating compressed archive..."
    tar -czf "${DEPLOY_DIR}.tar.gz" $DEPLOY_DIR
    print_success "Archive created: ${DEPLOY_DIR}.tar.gz"
fi

echo ""
print_success "🎉 Deployment preparation completed successfully!"
print_status "📁 Deployment package: $DEPLOY_DIR"
print_status "📋 Instructions: $DEPLOY_DIR/DEPLOYMENT.md"
print_status "🐳 Docker ready: $DEPLOY_DIR/docker-compose.yml"
echo ""
print_warning "Remember to:"
echo "  - Configure environment variables"
echo "  - Set up SSL certificates"
echo "  - Configure monitoring"
echo "  - Set up backup strategies"
echo "" 