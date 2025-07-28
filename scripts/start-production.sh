#!/bin/bash

# Core 2.0 Frontend Production Start Script
# This script starts the frontend application in production mode

set -e

echo "🚀 Starting Core 2.0 Frontend in Production Mode..."

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

# Check if .next directory exists
if [ ! -d ".next" ]; then
    print_error ".next directory not found. Please run 'npm run build' first."
    exit 1
fi

# Set production environment variables
export NODE_ENV=production
export PORT=${PORT:-3000}
export HOSTNAME=${HOSTNAME:-0.0.0.0}
export NEXT_TELEMETRY_DISABLED=1

print_status "Environment: $NODE_ENV"
print_status "Port: $PORT"
print_status "Hostname: $HOSTNAME"

# Health check function
health_check() {
    local max_attempts=30
    local attempt=1
    
    print_status "🔍 Performing health check..."
    
    while [ $attempt -le $max_attempts ]; do
        if curl -f http://localhost:$PORT/api/health > /dev/null 2>&1; then
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

# Graceful shutdown function
cleanup() {
    print_status "🛑 Shutting down gracefully..."
    if [ ! -z "$SERVER_PID" ]; then
        kill $SERVER_PID 2>/dev/null || true
    fi
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start the application
print_status "🚀 Starting Core 2.0 Frontend..."
print_status "📊 Environment: $NODE_ENV"
print_status "🌐 Port: $PORT"
print_status "🏠 Hostname: $HOSTNAME"

# Start the server in background
npm start &
SERVER_PID=$!

# Wait for server to start
print_status "⏳ Waiting for server to start..."
sleep 5

# Check if server is running
if ! kill -0 $SERVER_PID 2>/dev/null; then
    print_error "Server failed to start"
    exit 1
fi

print_success "Server process started with PID: $SERVER_PID"

# Perform health check
if health_check; then
    print_success "🎉 Application started successfully!"
    echo ""
    print_status "📱 Application URL: http://localhost:$PORT"
    print_status "🔍 Health Check URL: http://localhost:$PORT/api/health"
    print_status "📊 Process ID: $SERVER_PID"
    echo ""
    print_status "Press Ctrl+C to stop the application"
    echo ""
    
    # Wait for server process
    wait $SERVER_PID
else
    print_error "💥 Application failed to start properly"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi 