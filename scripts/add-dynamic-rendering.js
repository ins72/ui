const fs = require('fs');
const path = require('path');

// Function to recursively find all page.tsx files
function findPageFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.next') {
            findPageFiles(fullPath, files);
        } else if (item === 'page.tsx') {
            files.push(fullPath);
        }
    }
    
    return files;
}

// Function to add dynamic rendering to a page file
function addDynamicRendering(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Skip if already has dynamic export
        if (content.includes("export const dynamic = 'force-dynamic'")) {
            return false;
        }
        
        // Add dynamic export after imports
        const importMatch = content.match(/(import .+ from .+;\n?)+/);
        if (importMatch) {
            const dynamicExport = "\n// Force dynamic rendering\nexport const dynamic = 'force-dynamic';\n\n";
            content = content.replace(importMatch[0], importMatch[0] + dynamicExport);
            
            fs.writeFileSync(filePath, content);
            console.log(`✅ Added dynamic rendering to: ${path.relative(process.cwd(), filePath)}`);
            return true;
        }
    } catch (error) {
        console.log(`❌ Error processing ${filePath}:`, error.message);
    }
    return false;
}

// Main execution
console.log('🔧 Adding dynamic rendering to all pages...');

const projectRoot = process.cwd();
const pageFiles = findPageFiles(projectRoot);

let modifiedCount = 0;
for (const file of pageFiles) {
    if (addDynamicRendering(file)) {
        modifiedCount++;
    }
}

console.log(`\n🎉 Added dynamic rendering to ${modifiedCount} pages`); 