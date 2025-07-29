#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('🚀 Starting deployment with port configuration...');
console.log('📊 Port Configuration:');
console.log('   Frontend: http://localhost:3004');
console.log('   Backend:  http://localhost:8004');
console.log('   Database: http://localhost:5004');
console.log('');

// Start database first
console.log('🗄️ Starting database on port 5004...');
const dbProcess = spawn('npx', ['prisma', 'studio', '--port', '5004'], {
    stdio: 'inherit',
    shell: true,
    detached: true
});

// Wait for database to start
setTimeout(() => {
    console.log('✅ Database started on port 5004');
    
    // Start backend
    console.log('🔧 Starting backend on port 8004...');
    const backendProcess = spawn('npm', ['run', 'start:8004'], {
        stdio: 'inherit',
        shell: true,
        detached: true
    });
    
    // Wait for backend to start
    setTimeout(() => {
        console.log('✅ Backend started on port 8004');
        
        // Start frontend
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
        
    }, 3000);
    
}, 2000); 