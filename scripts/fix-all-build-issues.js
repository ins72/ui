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

// Function to fix all common build issues in a file
function fixBuildIssues(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix 1: useEffect imports
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
                const firstImportMatch = content.match(/import .+ from/);
                if (firstImportMatch) {
                    const reactImport = 'import { useEffect } from "react";\n';
                    content = content.replace(firstImportMatch[0], reactImport + firstImportMatch[0]);
                    modified = true;
                }
            }
        }
        
        // Fix 2: useSession destructuring
        if (content.includes('const { data: session, update } = useSession();')) {
            content = content.replace(
                'const { data: session, update } = useSession();',
                `const sessionResult = useSession();
    const session = sessionResult?.data;
    const update = sessionResult?.update;`
            );
            modified = true;
        }
        
        // Fix 3: Add missing dataService imports where needed
        if (content.includes('dataService.') && !content.includes('import { dataService }')) {
            const importMatch = content.match(/import .+ from/);
            if (importMatch) {
                const dataServiceImport = 'import { dataService } from "@/lib/data-service";\n';
                content = content.replace(importMatch[0], dataServiceImport + importMatch[0]);
                modified = true;
            }
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content);
            console.log(`✅ Fixed issues in: ${path.relative(process.cwd(), filePath)}`);
            return true;
        }
    } catch (error) {
        console.log(`❌ Error processing ${filePath}:`, error.message);
    }
    return false;
}

// Main execution
console.log('🔧 Fixing all build issues...');

const projectRoot = process.cwd();
const tsxFiles = findTsxFiles(projectRoot);

let fixedCount = 0;
for (const file of tsxFiles) {
    if (fixBuildIssues(file)) {
        fixedCount++;
    }
}

console.log(`\n🎉 Fixed issues in ${fixedCount} files`);

// Also check for specific problematic files that might have been missed
const specificFiles = [
    'templates/Products/ScheduledPage/index.tsx',
    'templates/Products/ReleasedPage/index.tsx',
    'templates/Products/DraftsPage/index.tsx',
    'templates/Products/NewProductPage/index.tsx',
    'templates/Products/CommentsPage/index.tsx',
    'templates/Products/OverviewPage/index.tsx'
];

console.log('\n🔍 Checking specific problematic files...');
for (const file of specificFiles) {
    const fullPath = path.join(projectRoot, file);
    if (fs.existsSync(fullPath)) {
        if (fixBuildIssues(fullPath)) {
            console.log(`✅ Fixed: ${file}`);
        }
    }
} 