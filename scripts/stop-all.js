#!/usr/bin/env node

const { exec } = require('child_process');

console.log('🛑 Stopping all deployed services...');

// Function to kill processes on specific ports
function killProcessOnPort(port) {
    return new Promise((resolve) => {
        exec(`netstat -ano | findstr :${port}`, (error, stdout) => {
            if (stdout) {
                const lines = stdout.split('\n');
                lines.forEach(line => {
                    const parts = line.trim().split(/\s+/);
                    if (parts.length > 4) {
                        const pid = parts[4];
                        if (pid && pid !== 'PID') {
                            exec(`taskkill /F /PID ${pid}`, (killError) => {
                                if (!killError) {
                                    console.log(`✅ Stopped process on port ${port} (PID: ${pid})`);
                                }
                            });
                        }
                    }
                });
            }
            resolve();
        });
    });
}

async function stopAllServices() {
    try {
        console.log('🔄 Stopping services on ports 3004, 8004, 5004...');
        
        await Promise.all([
            killProcessOnPort(3004),
            killProcessOnPort(8004),
            killProcessOnPort(5004)
        ]);

        // Also kill any remaining node processes
        exec('taskkill /F /IM node.exe', (error) => {
            if (!error) {
                console.log('✅ Stopped all Node.js processes');
            }
        });

        console.log('✅ All services stopped successfully!');
        
    } catch (error) {
        console.error('❌ Error stopping services:', error.message);
    }
}

stopAllServices(); 