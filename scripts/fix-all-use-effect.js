const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.next') {
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
            // Pattern 1: import { useState } from "react"
            if (content.includes('import { useState } from "react"') && !content.includes('useEffect')) {
                content = content.replace(
                    'import { useState } from "react"',
                    'import { useState, useEffect } from "react"'
                );
                modified = true;
            }
            // Pattern 2: import { useState, other } from "react"
            else if (content.includes('import {') && content.includes('} from "react"') && !content.includes('useEffect')) {
                const reactImportMatch = content.match(/import \{([^}]+)\} from "react"/);
                if (reactImportMatch && !reactImportMatch[1].includes('useEffect')) {
                    const newImport = `import { ${reactImportMatch[1]}, useEffect } from "react"`;
                    content = content.replace(reactImportMatch[0], newImport);
                    modified = true;
                }
            }
            // Pattern 3: No React import at all
            else if (!content.includes('import {') || !content.includes('} from "react"')) {
                // Find the first import statement and add React import before it
                const firstImportMatch = content.match(/import .+ from/);
                if (firstImportMatch) {
                    const reactImport = 'import { useEffect } from "react";\n';
                    content = content.replace(firstImportMatch[0], reactImport + firstImportMatch[0]);
                    modified = true;
                }
            }
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Fixed useEffect import in: ${path.relative(process.cwd(), filePath)}`);
            return true;
        }
    } catch (error) {
        console.log(`❌ Error processing ${filePath}:`, error.message);
    }
    return false;
}

// Main execution
console.log('🔧 Fixing all useEffect imports...');

const projectRoot = process.cwd();
const tsxFiles = findTsxFiles(projectRoot);

let fixedCount = 0;
for (const file of tsxFiles) {
    if (fixUseEffectImports(file)) {
        fixedCount++;
    }
}

console.log(`\n🎉 Fixed useEffect imports in ${fixedCount} files`);

// Also check for specific problematic files
const problematicFiles = [
    'templates/Income/Refunds/index.tsx',
    'templates/PromotePage/Insights/index.tsx',
    'templates/Income/Refunds/DetailsPage/index.tsx'
];

console.log('\n🔍 Checking specific problematic files...');
for (const file of problematicFiles) {
    const fullPath = path.join(projectRoot, file);
    if (fs.existsSync(fullPath)) {
        if (fixUseEffectImports(fullPath)) {
            console.log(`✅ Fixed: ${file}`);
        }
    }
} 