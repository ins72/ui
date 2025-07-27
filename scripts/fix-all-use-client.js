#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing ALL "use client" directive placement...\n');

// Find all TypeScript/TSX files that might have "use client" issues
const findFiles = (dir, files = []) => {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  });
  return files;
};

const allFiles = findFiles('templates');
const allComponentFiles = findFiles('components');

const filesToCheck = [...allFiles, ...allComponentFiles];

let fixedCount = 0;

filesToCheck.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has "use client" directive but not at the top
    if (content.includes('"use client"') && !content.startsWith('"use client"')) {
      // Remove existing "use client" directive
      content = content.replace(/"use client";\s*\n/g, '');
      
      // Add "use client" at the very top
      content = '"use client";\n\n' + content;
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    // Skip files that can't be read
  }
});

console.log(`\n🎉 Fixed ${fixedCount} files with "use client" directive issues!`); 