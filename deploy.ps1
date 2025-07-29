# Core2 Dashboard Deployment Script
# Deploys Frontend (3001), Backend (8001), and MongoDB (5001)

Write-Host "🚀 Starting Core2 Dashboard Deployment..." -ForegroundColor Green

# Function to check if port is in use
function Test-Port {
    param([int]$Port)
    $connection = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
    return $connection -ne $null
}

# Function to kill process on port
function Stop-Port {
    param([int]$Port)
    $processes = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
    foreach($processId in $processes) {
        Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
        Write-Host "✅ Stopped process on port $Port" -ForegroundColor Yellow
    }
}

# Stop any existing processes on our ports
Write-Host "🛑 Stopping existing processes..." -ForegroundColor Yellow
Stop-Port 3001
Stop-Port 8001
Stop-Port 5001

# Check if MongoDB is running on port 5001
if (Test-Port 5001) {
    Write-Host "✅ MongoDB is already running on port 5001" -ForegroundColor Green
} else {
    Write-Host "🗄️ Starting MongoDB on port 5001..." -ForegroundColor Cyan
    
    # Create data directories if they don't exist
    if (!(Test-Path "C:\data\db")) {
        New-Item -ItemType Directory -Path "C:\data\db" -Force | Out-Null
    }
    if (!(Test-Path "C:\data\log")) {
        New-Item -ItemType Directory -Path "C:\data\log" -Force | Out-Null
    }
    
    # Start MongoDB
    Start-Process -FilePath "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" -ArgumentList "--port", "5001", "--dbpath", "C:\data\db", "--logpath", "C:\data\log\mongod.log" -WindowStyle Hidden
    Start-Sleep -Seconds 3
    Write-Host "✅ MongoDB started on port 5001" -ForegroundColor Green
}

# Wait for MongoDB to be ready
Write-Host "⏳ Waiting for MongoDB to be ready..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Push Prisma schema to MongoDB
Write-Host "🗄️ Pushing Prisma schema to MongoDB..." -ForegroundColor Cyan
try {
    npx prisma db push
    Write-Host "✅ Database schema updated" -ForegroundColor Green
} catch {
    Write-Host "⚠️ Database schema update failed, continuing..." -ForegroundColor Yellow
}

# Start Backend API Server
Write-Host "🔧 Starting Backend API Server on port 8001..." -ForegroundColor Cyan
Start-Process -FilePath "node" -ArgumentList "backend/server.js" -WindowStyle Hidden
Start-Sleep -Seconds 3

# Check if backend is running
if (Test-Port 8001) {
    Write-Host "✅ Backend API Server started on port 8001" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to start Backend API Server" -ForegroundColor Red
    exit 1
}

# Start Frontend Server
Write-Host "🌐 Starting Frontend Server on port 3001..." -ForegroundColor Cyan
$env:PORT = 3001
Start-Process -FilePath "npm" -ArgumentList "start" -WindowStyle Hidden
Start-Sleep -Seconds 5

# Check if frontend is running
if (Test-Port 3001) {
    Write-Host "✅ Frontend Server started on port 3001" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to start Frontend Server" -ForegroundColor Red
    exit 1
}

# Display deployment summary
Write-Host ""
Write-Host "🎉 DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "🌐 Frontend: http://localhost:3001" -ForegroundColor White
Write-Host "🔧 Backend API: http://localhost:8001" -ForegroundColor White
Write-Host "🗄️ Database: MongoDB on localhost:5001" -ForegroundColor White
Write-Host "📊 Health Check: http://localhost:8001/api/health" -ForegroundColor White
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop all services" -ForegroundColor Yellow

# Keep script running
try {
    while ($true) {
        Start-Sleep -Seconds 10
        
        # Check if all services are still running
        $frontendRunning = Test-Port 3001
        $backendRunning = Test-Port 8001
        $dbRunning = Test-Port 5001
        
        if (!$frontendRunning -or !$backendRunning -or !$dbRunning) {
            Write-Host "⚠️ One or more services stopped unexpectedly" -ForegroundColor Yellow
            break
        }
    }
} catch {
    Write-Host "🛑 Stopping all services..." -ForegroundColor Yellow
    Stop-Port 3001
    Stop-Port 8001
    Stop-Port 5001
    Write-Host "✅ All services stopped" -ForegroundColor Green
} 