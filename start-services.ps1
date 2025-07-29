# Core2 Dashboard - Service Startup Script
# This script starts all services for the Core2 Dashboard application

Write-Host "🚀 Starting Core2 Dashboard Services..." -ForegroundColor Green
Write-Host ""

# Add MongoDB to PATH
$env:PATH += ";C:\Program Files\MongoDB\Server\8.0\bin"

# Create MongoDB data directory if it doesn't exist
if (!(Test-Path ".\mongodb-data")) {
    New-Item -ItemType Directory -Path ".\mongodb-data" -Force
    Write-Host "✅ Created MongoDB data directory" -ForegroundColor Green
}

# Start MongoDB on port 5000
Write-Host "🗄️  Starting MongoDB on port 5000..." -ForegroundColor Yellow
Start-Process -FilePath "mongod" -ArgumentList "--port", "5000", "--dbpath", ".\mongodb-data" -WindowStyle Hidden
Start-Sleep -Seconds 3

# Check if MongoDB is running
$mongoRunning = netstat -an | Select-String ":5000" | Select-String "LISTENING"
if ($mongoRunning) {
    Write-Host "✅ MongoDB is running on port 5000" -ForegroundColor Green
} else {
    Write-Host "❌ MongoDB failed to start" -ForegroundColor Red
    exit 1
}

# Start Backend API on port 8000
Write-Host "🔧 Starting Backend API on port 8000..." -ForegroundColor Yellow
Set-Location "backend"
Start-Process -FilePath "node" -ArgumentList "server.js" -WindowStyle Hidden
Set-Location ".."
Start-Sleep -Seconds 3

# Check if Backend is running
$backendRunning = netstat -an | Select-String ":8000" | Select-String "LISTENING"
if ($backendRunning) {
    Write-Host "✅ Backend API is running on port 8000" -ForegroundColor Green
} else {
    Write-Host "❌ Backend API failed to start" -ForegroundColor Red
    exit 1
}

# Start Frontend on port 3000
Write-Host "🌐 Starting Frontend on port 3000..." -ForegroundColor Yellow
Start-Process -FilePath "npm" -ArgumentList "run", "dev" -WindowStyle Hidden
Start-Sleep -Seconds 5

# Check if Frontend is running
$frontendRunning = netstat -an | Select-String ":3000" | Select-String "LISTENING"
if ($frontendRunning) {
    Write-Host "✅ Frontend is running on port 3000" -ForegroundColor Green
} else {
    Write-Host "❌ Frontend failed to start" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 All services are now running!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Service Status:" -ForegroundColor Cyan
Write-Host "   🗄️  MongoDB:    http://localhost:5000" -ForegroundColor White
Write-Host "   🔧 Backend:    http://localhost:8000" -ForegroundColor White
Write-Host "   🌐 Frontend:   http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Quick Links:" -ForegroundColor Cyan
Write-Host "   📊 Health Check: http://localhost:8000/api/health" -ForegroundColor White
Write-Host "   🛠️  API Docs:     http://localhost:8000/api/products" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop all services" -ForegroundColor Yellow

# Keep the script running
try {
    while ($true) {
        Start-Sleep -Seconds 10
    }
} catch {
    Write-Host ""
    Write-Host "🛑 Stopping services..." -ForegroundColor Yellow
    
    # Stop all Node.js processes
    Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
    
    # Stop MongoDB
    Get-Process -Name "mongod" -ErrorAction SilentlyContinue | Stop-Process -Force
    
    Write-Host "✅ All services stopped" -ForegroundColor Green
} 