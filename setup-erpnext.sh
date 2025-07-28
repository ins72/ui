#!/bin/bash

# ERPNext Business Management System Setup Script
# This script helps you set up ERPNext backend for the business management system

echo "🚀 ERPNext Business Management System Setup"
echo "=========================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    echo "Visit: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker and Docker Compose are installed"

# Create ERPNext directory
ERPNEXT_DIR="erpnext-backend"
if [ ! -d "$ERPNEXT_DIR" ]; then
    echo "📁 Creating ERPNext backend directory..."
    mkdir -p "$ERPNEXT_DIR"
fi

cd "$ERPNEXT_DIR"

# Copy Docker Compose file
echo "📋 Setting up Docker Compose configuration..."
cp ../docker-compose.erpnext.yml docker-compose.yml

# Create environment file
echo "🔧 Creating environment configuration..."
cat > .env << EOF
# ERPNext Environment Configuration
ERPNEXT_VERSION=v15.0.0
FRAPPE_VERSION=v15.0.0

# Database Configuration
MYSQL_ROOT_PASSWORD=123
MARIADB_ROOT_PASSWORD=123

# ERPNext Configuration
ADMIN_PASSWORD=admin
SITE_NAME=erpnext.localhost

# Redis Configuration
REDIS_CACHE_MAXMEMORY=100mb
REDIS_QUEUE_MAXMEMORY=100mb
REDIS_SOCKETIO_MAXMEMORY=100mb
EOF

# Start ERPNext
echo "🚀 Starting ERPNext services..."
docker-compose up -d

echo "⏳ Waiting for ERPNext to start up..."
sleep 30

# Check if services are running
echo "🔍 Checking service status..."
docker-compose ps

echo ""
echo "🎉 ERPNext setup completed!"
echo ""
echo "📋 Access Information:"
echo "   • ERPNext Frontend: http://localhost:8000"
echo "   • ERPNext API: http://localhost:8000/api"
echo "   • Default Admin: admin"
echo "   • Default Password: admin"
echo ""
echo "🔧 Next Steps:"
echo "   1. Open http://localhost:8000 in your browser"
echo "   2. Complete the ERPNext setup wizard"
echo "   3. Create your first site"
echo "   4. Generate API credentials in User Profile → API Access"
echo "   5. Update your .env.local file with the API credentials"
echo ""
echo "📚 Documentation:"
echo "   • ERPNext Docs: https://docs.erpnext.com"
echo "   • Docker Setup: https://github.com/frappe/frappe_docker"
echo ""
echo "🛠️ Useful Commands:"
echo "   • View logs: docker-compose logs -f"
echo "   • Stop services: docker-compose down"
echo "   • Restart services: docker-compose restart"
echo "   • Update ERPNext: docker-compose pull && docker-compose up -d"
echo ""

# Create API setup guide
cat > API_SETUP.md << 'EOF'
# ERPNext API Setup Guide

## Getting API Credentials

1. **Login to ERPNext**
   - Go to http://localhost:8000
   - Login with admin/admin

2. **Navigate to API Access**
   - Click on your user profile (top right)
   - Go to "API Access" section

3. **Generate API Key**
   - Click "Generate Keys"
   - Copy the API Key and API Secret

4. **Update Environment Variables**
   Create a `.env.local` file in your project root:
   ```
   NEXT_PUBLIC_ERP_NEXT_URL=http://localhost:8000
   NEXT_PUBLIC_ERP_NEXT_API_KEY=your_api_key_here
   NEXT_PUBLIC_ERP_NEXT_API_SECRET=your_api_secret_here
   ```

5. **Test Connection**
   - Restart your Next.js development server
   - Check the browser console for connection status

## API Endpoints

The system integrates with these ERPNext endpoints:
- `/api/resource/Customer` - Customer management
- `/api/resource/Lead` - Lead management
- `/api/resource/Sales Order` - Sales orders
- `/api/resource/Item` - Product catalog
- `/api/resource/Employee` - Employee management
- `/api/resource/Project` - Project management

## Troubleshooting

- **Connection refused**: Make sure ERPNext is running (`docker-compose ps`)
- **Authentication failed**: Check your API credentials
- **CORS errors**: ERPNext should handle CORS automatically
- **Port conflicts**: Change ports in docker-compose.yml if needed
EOF

echo "📖 Created API setup guide: $ERPNEXT_DIR/API_SETUP.md"
echo ""
echo "✅ Setup complete! ERPNext is ready to use." 