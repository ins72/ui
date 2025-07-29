# Core2 Dashboard - Complete Deployment Script
# This script deploys the entire Core2 Dashboard application with MongoDB

Write-Host "🚀 Starting Core2 Dashboard Complete Deployment..." -ForegroundColor Green
Write-Host ""

# Add MongoDB to PATH
$env:PATH += ";C:\Program Files\MongoDB\Server\8.1\bin"

# Function to check if a port is in use
function Test-Port {
    param([int]$Port)
    $connection = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
    return $connection -ne $null
}

# Function to wait for a service to be ready
function Wait-ForService {
    param([int]$Port, [string]$ServiceName, [int]$Timeout = 30)
    Write-Host "⏳ Waiting for $ServiceName on port $Port..." -ForegroundColor Yellow
    $startTime = Get-Date
    while ((Get-Date) -lt ($startTime.AddSeconds($Timeout))) {
        if (Test-Port -Port $Port) {
            Write-Host "✅ $ServiceName is ready on port $Port" -ForegroundColor Green
            return $true
        }
        Start-Sleep -Seconds 1
    }
    Write-Host "❌ $ServiceName failed to start on port $Port" -ForegroundColor Red
    return $false
}

# Stop any existing services
Write-Host "🛑 Stopping any existing services..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
Get-Process -Name "mongod" -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

# Create MongoDB data directory if it doesn't exist
if (!(Test-Path ".\mongodb-data")) {
    New-Item -ItemType Directory -Path ".\mongodb-data" -Force
    Write-Host "✅ Created MongoDB data directory" -ForegroundColor Green
}

# Start MongoDB on port 5000
Write-Host "🗄️  Starting MongoDB on port 5000..." -ForegroundColor Yellow
Start-Process -FilePath "mongod" -ArgumentList "--port", "5000", "--dbpath", ".\mongodb-data" -WindowStyle Hidden

# Wait for MongoDB to be ready
if (!(Wait-ForService -Port 5000 -ServiceName "MongoDB")) {
    Write-Host "❌ Failed to start MongoDB. Exiting..." -ForegroundColor Red
    exit 1
}

# Push database schema
Write-Host "📊 Setting up database schema..." -ForegroundColor Yellow
try {
    npx prisma db push
    Write-Host "✅ Database schema updated" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Database schema push failed, continuing..." -ForegroundColor Yellow
}

# Start Backend API on port 8000
Write-Host "🔧 Starting Backend API on port 8000..." -ForegroundColor Yellow
Set-Location "backend"
Start-Process -FilePath "node" -ArgumentList "server.js" -WindowStyle Hidden
Set-Location ".."

# Wait for Backend to be ready
if (!(Wait-ForService -Port 8000 -ServiceName "Backend API")) {
    Write-Host "❌ Failed to start Backend API. Exiting..." -ForegroundColor Red
    exit 1
}

# Build and start Frontend on port 3000
Write-Host "🌐 Building and starting Frontend on port 3000..." -ForegroundColor Yellow
Start-Process -FilePath "npm" -ArgumentList "run", "dev" -WindowStyle Hidden

# Wait for Frontend to be ready
if (!(Wait-ForService -Port 3000 -ServiceName "Frontend")) {
    Write-Host "❌ Failed to start Frontend. Exiting..." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 All services are now running successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Service Status:" -ForegroundColor Cyan
Write-Host "   🗄️  MongoDB:    http://localhost:5000" -ForegroundColor White
Write-Host "   🔧 Backend:    http://localhost:8000" -ForegroundColor White
Write-Host "   🌐 Frontend:   http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Quick Links:" -ForegroundColor Cyan
Write-Host "   📊 Health Check: http://localhost:8000/api/health" -ForegroundColor White
Write-Host "   🛠️  API Docs:     http://localhost:8000/api/products" -ForegroundColor White
Write-Host "   🗄️  Prisma Studio: http://localhost:5000 (Database)" -ForegroundColor White
Write-Host ""
Write-Host "📝 To stop all services, run: .\stop-services.ps1" -ForegroundColor Yellow
Write-Host ""

# Keep the script running and monitor services
Write-Host "🔍 Monitoring services... (Press Ctrl+C to stop)" -ForegroundColor Cyan
try {
    while ($true) {
        $mongoStatus = Test-Port -Port 5000
        $backendStatus = Test-Port -Port 8000
        $frontendStatus = Test-Port -Port 3000
        
        if (!$mongoStatus -or !$backendStatus -or !$frontendStatus) {
            Write-Host "⚠️  One or more services stopped unexpectedly" -ForegroundColor Yellow
            if (!$mongoStatus) { Write-Host "   ❌ MongoDB (port 5000) is down" -ForegroundColor Red }
            if (!$backendStatus) { Write-Host "   ❌ Backend (port 8000) is down" -ForegroundColor Red }
            if (!$frontendStatus) { Write-Host "   ❌ Frontend (port 3000) is down" -ForegroundColor Red }
        } else {
            Write-Host "✅ All services running normally" -ForegroundColor Green
        }
        
        Start-Sleep -Seconds 30
    }
} catch {
    Write-Host ""
    Write-Host "🛑 Stopping all services..." -ForegroundColor Yellow
    
    # Stop all Node.js processes
    Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
    
    # Stop MongoDB
    Get-Process -Name "mongod" -ErrorAction SilentlyContinue | Stop-Process -Force
    
    Write-Host "✅ All services stopped" -ForegroundColor Green
} 