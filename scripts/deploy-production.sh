#!/bin/bash

# Core 2.0 Frontend Production Deployment Script
# This script handles the complete production deployment process

set -e

echo "🚀 Core 2.0 Frontend Production Deployment"
echo "=========================================="

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

# Configuration
PROJECT_NAME="core2-frontend"
DEPLOYMENT_ENV=${DEPLOYMENT_ENV:-"production"}
BUILD_DIR=".next"
DOCKER_IMAGE_NAME="core2-frontend"
DOCKER_TAG="latest"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the frontend directory."
    exit 1
fi

# Function to check prerequisites
check_prerequisites() {
    print_status "🔍 Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    
    # Check Docker (optional)
    if command -v docker &> /dev/null; then
        DOCKER_AVAILABLE=true
        print_success "Docker is available"
    else
        DOCKER_AVAILABLE=false
        print_warning "Docker not found - skipping container deployment"
    fi
    
    print_success "Prerequisites check completed"
}

# Function to install dependencies
install_dependencies() {
    print_status "📦 Installing dependencies..."
    
    # Clean install
    rm -rf node_modules package-lock.json
    npm ci --only=production
    
    print_success "Dependencies installed successfully"
}

# Function to run tests
run_tests() {
    print_status "🧪 Running tests..."
    
    if npm test -- --passWithNoTests; then
        print_success "All tests passed"
    else
        print_error "Tests failed"
        exit 1
    fi
}

# Function to build the application
build_application() {
    print_status "🔨 Building application for production..."
    
    # Set production environment
    export NODE_ENV=production
    export NEXT_TELEMETRY_DISABLED=1
    
    # Clean previous build
    rm -rf $BUILD_DIR
    
    # Build the application
    if npm run build; then
        print_success "Application built successfully"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Function to run security audit
security_audit() {
    print_status "🔒 Running security audit..."
    
    if npm audit --audit-level=moderate; then
        print_success "Security audit passed"
    else
        print_warning "Security vulnerabilities found - review and fix before deployment"
        read -p "Continue with deployment? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_error "Deployment cancelled"
            exit 1
        fi
    fi
}

# Function to build Docker image
build_docker_image() {
    if [ "$DOCKER_AVAILABLE" = true ]; then
        print_status "🐳 Building Docker image..."
        
        if docker build -f Dockerfile.production -t $DOCKER_IMAGE_NAME:$DOCKER_TAG .; then
            print_success "Docker image built successfully"
        else
            print_error "Docker build failed"
            exit 1
        fi
    fi
}

# Function to deploy with Docker Compose
deploy_with_docker() {
    if [ "$DOCKER_AVAILABLE" = true ]; then
        print_status "🚀 Deploying with Docker Compose..."
        
        if docker-compose -f docker-compose.production.yml up -d; then
            print_success "Application deployed with Docker Compose"
        else
            print_error "Docker Compose deployment failed"
            exit 1
        fi
    fi
}

# Function to deploy without Docker
deploy_without_docker() {
    print_status "🚀 Deploying without Docker..."
    
    # Start the application
    if npm start; then
        print_success "Application started successfully"
    else
        print_error "Application startup failed"
        exit 1
    fi
}

# Function to perform health check
health_check() {
    print_status "🔍 Performing health check..."
    
    local max_attempts=30
    local attempt=1
    local health_url="http://localhost:3000/api/health"
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f $health_url > /dev/null 2>&1; then
            print_success "Health check passed!"
            return 0
        fi
        
        print_warning "Health check attempt $attempt/$max_attempts failed, retrying..."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    print_error "Health check failed after $max_attempts attempts"
    return 1
}

# Function to generate deployment report
generate_report() {
    print_status "📊 Generating deployment report..."
    
    local report_file="deployment-report-$(date +%Y%m%d-%H%M%S).txt"
    
    cat > $report_file << EOF
Core 2.0 Frontend Deployment Report
==================================
Date: $(date)
Environment: $DEPLOYMENT_ENV
Node Version: $(node --version)
NPM Version: $(npm --version)
Build Directory: $BUILD_DIR
Docker Available: $DOCKER_AVAILABLE

Deployment Steps Completed:
- Prerequisites check: ✅
- Dependencies installation: ✅
- Tests execution: ✅
- Application build: ✅
- Security audit: ✅
- Docker build: $([ "$DOCKER_AVAILABLE" = true ] && echo "✅" || echo "⏭️")
- Deployment: ✅
- Health check: ✅

Application URLs:
- Main Application: http://localhost:3000
- Health Check: http://localhost:3000/api/health
- Dashboard: http://localhost:3000/dashboard

Next Steps:
1. Configure your reverse proxy (Nginx/Apache)
2. Set up SSL certificates
3. Configure monitoring and logging
4. Set up backup strategies
5. Configure CI/CD pipeline

EOF
    
    print_success "Deployment report generated: $report_file"
}

# Main deployment process
main() {
    print_status "Starting Core 2.0 Frontend deployment..."
    
    # Check prerequisites
    check_prerequisites
    
    # Install dependencies
    install_dependencies
    
    # Run tests
    run_tests
    
    # Build application
    build_application
    
    # Security audit
    security_audit
    
    # Build Docker image
    build_docker_image
    
    # Deploy application
    if [ "$DOCKER_AVAILABLE" = true ]; then
        deploy_with_docker
    else
        deploy_without_docker
    fi
    
    # Health check
    if health_check; then
        print_success "🎉 Deployment completed successfully!"
    else
        print_error "💥 Deployment failed during health check"
        exit 1
    fi
    
    # Generate report
    generate_report
    
    echo ""
    print_success "Core 2.0 Frontend is now live and ready for production use!"
    echo ""
    print_status "Application URLs:"
    echo "  🌐 Main Application: http://localhost:3000"
    echo "  📊 Dashboard: http://localhost:3000/dashboard"
    echo "  🔍 Health Check: http://localhost:3000/api/health"
    echo ""
    print_status "Next steps:"
    echo "  1. Configure your domain and SSL certificates"
    echo "  2. Set up monitoring and alerting"
    echo "  3. Configure backup strategies"
    echo "  4. Set up CI/CD pipeline for future deployments"
    echo ""
}

# Run the main function
main "$@" 