#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing "use client" directive placement...\n');

const filesToFix = [
  'templates/HomePage/Comments/index.tsx',
  'templates/HomePage/Overview/Balance/index.tsx',
  'templates/Income/PayoutsPage/Statistics/index.tsx',
  'templates/Income/StatementsPage/Statistics/index.tsx',
  'templates/MessagesPage/Details/Chat/index.tsx'
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove existing "use client" directive
    content = content.replace(/"use client";\s*\n/g, '');
    
    // Add "use client" at the very top
    content = '"use client";\n\n' + content;
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  }
});

console.log('\n🎉 "use client" directive fixes complete!'); 