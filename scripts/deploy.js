#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment with port configuration...');
console.log('📊 Port Configuration:');
console.log('   Frontend: http://localhost:3004');
console.log('   Backend:  http://localhost:8004');
console.log('   Database: http://localhost:5004');
console.log('');

// Check if .env.local exists, if not create from env.example
const envLocalPath = path.join(__dirname, '..', '.env.local');
const envExamplePath = path.join(__dirname, '..', 'env.example');

if (!fs.existsSync(envLocalPath) && fs.existsSync(envExamplePath)) {
    console.log('📝 Creating .env.local from env.example...');
    fs.copyFileSync(envExamplePath, envLocalPath);
    console.log('✅ .env.local created');
}

// Function to run a command
function runCommand(command, args, options = {}) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            stdio: 'inherit',
            shell: true,
            ...options
        });

        child.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command failed with exit code ${code}`));
            }
        });

        child.on('error', (error) => {
            reject(error);
        });
    });
}

// Main deployment function
async function deploy() {
    try {
        console.log('🔧 Building application...');
        await runCommand('npm', ['run', 'build']);
        console.log('✅ Build completed');

        console.log('🗄️ Starting database...');
        const dbProcess = spawn('npx', ['prisma', 'studio', '--port', '5004'], {
            stdio: 'inherit',
            shell: true,
            detached: true
        });
        console.log('✅ Database started on port 5004');

        // Wait a moment for database to start
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('🔧 Starting backend on port 8004...');
        const backendProcess = spawn('npm', ['run', 'start:8004'], {
            stdio: 'inherit',
            shell: true,
            detached: true
        });
        console.log('✅ Backend started on port 8004');

        // Wait a moment for backend to start
        await new Promise(resolve => setTimeout(resolve, 3000));

        console.log('🎨 Starting frontend on port 3004...');
        const frontendProcess = spawn('npm', ['run', 'start:3004'], {
            stdio: 'inherit',
            shell: true,
            detached: true
        });
        console.log('✅ Frontend started on port 3004');

        console.log('');
        console.log('🎉 Deployment completed successfully!');
        console.log('');
        console.log('📊 Services running:');
        console.log('   🌐 Frontend: http://localhost:3004');
        console.log('   🔧 Backend:  http://localhost:8004');
        console.log('   🗄️ Database: http://localhost:5004');
        console.log('');
        console.log('💡 To stop all services, run: npm run stop:all');
        console.log('💡 To view logs, check the terminal windows');

        // Handle process termination
        process.on('SIGINT', () => {
            console.log('\n🛑 Stopping all services...');
            process.kill(-dbProcess.pid, 'SIGTERM');
            process.kill(-backendProcess.pid, 'SIGTERM');
            process.kill(-frontendProcess.pid, 'SIGTERM');
            process.exit(0);
        });

    } catch (error) {
        console.error('❌ Deployment failed:', error.message);
        process.exit(1);
    }
}

// Run deployment
deploy(); 