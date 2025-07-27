const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findTsxFiles(fullPath, files);
        } else if (item.endsWith('.tsx')) {
            files.push(fullPath);
        }
    }
    
    return files;
}

// Function to fix useEffect imports in a file
function fixUseEffectImports(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Check if file uses useEffect but doesn't import it
        if (content.includes('useEffect') && content.includes('"use client"')) {
            // Check if useState is imported but useEffect is not
            if (content.includes('import { useState }') && !content.includes('useEffect')) {
                content = content.replace(
                    'import { useState } from "react"',
                    'import { useState, useEffect } from "react"'
                );
                modified = true;
            }
            // Check if other hooks are imported but useEffect is not
            else if (content.includes('import {') && content.includes('} from "react"') && !content.includes('useEffect')) {
                // Find the React import line and add useEffect
                const reactImportMatch = content.match(/import \{([^}]+)\} from "react"/);
                if (reactImportMatch && !reactImportMatch[1].includes('useEffect')) {
                    const newImport = `import { ${reactImportMatch[1]}, useEffect } from "react"`;
                    content = content.replace(reactImportMatch[0], newImport);
                    modified = true;
                }
            }
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Fixed useEffect import in: ${path.relative(process.cwd(), filePath)}`);
        }
    } catch (error) {
        console.log(`❌ Error processing ${filePath}:`, error.message);
    }
}

// Main execution
console.log('🔧 Fixing useEffect imports...');

const projectRoot = process.cwd();
const tsxFiles = findTsxFiles(projectRoot);

let fixedCount = 0;
for (const file of tsxFiles) {
    const originalContent = fs.readFileSync(file, 'utf8');
    fixUseEffectImports(file);
    const newContent = fs.readFileSync(file, 'utf8');
    if (originalContent !== newContent) {
        fixedCount++;
    }
}

console.log(`\n🎉 Fixed useEffect imports in ${fixedCount} files`); 