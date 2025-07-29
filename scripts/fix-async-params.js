#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of API route files that need to be updated
const apiRoutes = [
  'app/api/comments/[id]/route.ts',
  'app/api/customers/[id]/route.ts',
  'app/api/messages/[id]/route.ts',
  'app/api/notifications/[id]/route.ts',
  'app/api/refunds/[id]/route.ts',
  'app/api/transactions/[id]/route.ts'
];

function fixAsyncParams(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace params type from { id: string } to Promise<{ id: string }>
    content = content.replace(
      /{ params }: \{ params: \{ id: string \} \}/g,
      '{ params }: { params: Promise<{ id: string }> }'
    );
    
    // Add const { id } = await params; after the function signature
    content = content.replace(
      /export async function (GET|PUT|DELETE)\(\s*request: NextRequest,\s*\{ params \}: \{ params: Promise<\{ id: string \}> \}\s*\)\s*\{/g,
      'export async function $1(\n  request: NextRequest,\n  { params }: { params: Promise<{ id: string }> }\n) {\n  const { id } = await params;'
    );
    
    // Replace all instances of params.id with id
    content = content.replace(/params\.id/g, 'id');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${filePath}`);
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

console.log('🔧 Fixing async params in API routes...');

apiRoutes.forEach(fixAsyncParams);

console.log('✅ All API routes updated for Next.js 15 compatibility!'); 