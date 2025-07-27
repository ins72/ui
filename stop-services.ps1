# Core2 Dashboard - Service Stop Script
# This script stops all services for the Core2 Dashboard application

Write-Host "🛑 Stopping Core2 Dashboard Services..." -ForegroundColor Yellow
Write-Host ""

# Stop all Node.js processes
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
if ($nodeProcesses) {
    Write-Host "🔧 Stopping Node.js processes..." -ForegroundColor Yellow
    $nodeProcesses | Stop-Process -Force
    Write-Host "✅ Node.js processes stopped" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No Node.js processes found" -ForegroundColor Cyan
}

# Stop MongoDB
$mongoProcesses = Get-Process -Name "mongod" -ErrorAction SilentlyContinue
if ($mongoProcesses) {
    Write-Host "🗄️  Stopping MongoDB..." -ForegroundColor Yellow
    $mongoProcesses | Stop-Process -Force
    Write-Host "✅ MongoDB stopped" -ForegroundColor Green
} else {
    Write-Host "ℹ️  No MongoDB processes found" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "✅ All services have been stopped!" -ForegroundColor Green
Write-Host ""
Write-Host "To restart services, run: .\start-services.ps1" -ForegroundColor Cyan 