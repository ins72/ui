@echo off
echo 🚀 ERPNext Business Management System Setup
echo ==========================================

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker is not installed. Please install Docker first.
    echo Visit: https://docs.docker.com/get-docker/
    pause
    exit /b 1
)

REM Check if Docker Compose is installed
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Docker Compose is not installed. Please install Docker Compose first.
    echo Visit: https://docs.docker.com/compose/install/
    pause
    exit /b 1
)

echo ✅ Docker and Docker Compose are installed

REM Create ERPNext directory
set ERPNEXT_DIR=erpnext-backend
if not exist "%ERPNEXT_DIR%" (
    echo 📁 Creating ERPNext backend directory...
    mkdir "%ERPNEXT_DIR%"
)

cd "%ERPNEXT_DIR%"

REM Copy Docker Compose file
echo 📋 Setting up Docker Compose configuration...
copy "..\docker-compose.erpnext.yml" "docker-compose.yml"

REM Create environment file
echo 🔧 Creating environment configuration...
(
echo # ERPNext Environment Configuration
echo ERPNEXT_VERSION=v15.0.0
echo FRAPPE_VERSION=v15.0.0
echo.
echo # Database Configuration
echo MYSQL_ROOT_PASSWORD=123
echo MARIADB_ROOT_PASSWORD=123
echo.
echo # ERPNext Configuration
echo ADMIN_PASSWORD=admin
echo SITE_NAME=erpnext.localhost
echo.
echo # Redis Configuration
echo REDIS_CACHE_MAXMEMORY=100mb
echo REDIS_QUEUE_MAXMEMORY=100mb
echo REDIS_SOCKETIO_MAXMEMORY=100mb
) > .env

REM Start ERPNext
echo 🚀 Starting ERPNext services...
docker-compose up -d

echo ⏳ Waiting for ERPNext to start up...
timeout /t 30 /nobreak >nul

REM Check if services are running
echo 🔍 Checking service status...
docker-compose ps

echo.
echo 🎉 ERPNext setup completed!
echo.
echo 📋 Access Information:
echo    • ERPNext Frontend: http://localhost:8000
echo    • ERPNext API: http://localhost:8000/api
echo    • Default Admin: admin
echo    • Default Password: admin
echo.
echo 🔧 Next Steps:
echo    1. Open http://localhost:8000 in your browser
echo    2. Complete the ERPNext setup wizard
echo    3. Create your first site
echo    4. Generate API credentials in User Profile → API Access
echo    5. Update your .env.local file with the API credentials
echo.
echo 📚 Documentation:
echo    • ERPNext Docs: https://docs.erpnext.com
echo    • Docker Setup: https://github.com/frappe/frappe_docker
echo.
echo 🛠️ Useful Commands:
echo    • View logs: docker-compose logs -f
echo    • Stop services: docker-compose down
echo    • Restart services: docker-compose restart
echo    • Update ERPNext: docker-compose pull && docker-compose up -d
echo.

REM Create API setup guide
(
echo # ERPNext API Setup Guide
echo.
echo ## Getting API Credentials
echo.
echo 1. **Login to ERPNext**
echo    - Go to http://localhost:8000
echo    - Login with admin/admin
echo.
echo 2. **Navigate to API Access**
echo    - Click on your user profile ^(top right^)
echo    - Go to "API Access" section
echo.
echo 3. **Generate API Key**
echo    - Click "Generate Keys"
echo    - Copy the API Key and API Secret
echo.
echo 4. **Update Environment Variables**
echo    Create a `.env.local` file in your project root:
echo    ```
echo    NEXT_PUBLIC_ERP_NEXT_URL=http://localhost:8000
echo    NEXT_PUBLIC_ERP_NEXT_API_KEY=your_api_key_here
echo    NEXT_PUBLIC_ERP_NEXT_API_SECRET=your_api_secret_here
echo    ```
echo.
echo 5. **Test Connection**
echo    - Restart your Next.js development server
echo    - Check the browser console for connection status
echo.
echo ## API Endpoints
echo.
echo The system integrates with these ERPNext endpoints:
echo - `/api/resource/Customer` - Customer management
echo - `/api/resource/Lead` - Lead management
echo - `/api/resource/Sales Order` - Sales orders
echo - `/api/resource/Item` - Product catalog
echo - `/api/resource/Employee` - Employee management
echo - `/api/resource/Project` - Project management
echo.
echo ## Troubleshooting
echo.
echo - **Connection refused**: Make sure ERPNext is running ^(`docker-compose ps`^)
echo - **Authentication failed**: Check your API credentials
echo - **CORS errors**: ERPNext should handle CORS automatically
echo - **Port conflicts**: Change ports in docker-compose.yml if needed
) > API_SETUP.md

echo 📖 Created API setup guide: %ERPNEXT_DIR%\API_SETUP.md
echo.
echo ✅ Setup complete! ERPNext is ready to use.
pause 