#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all API routes for development...\n');

const apiFiles = [
  'app/api/customers/route.ts',
  'app/api/transactions/route.ts',
  'app/api/comments/route.ts',
  'app/api/messages/route.ts',
  'app/api/notifications/route.ts',
  'app/api/income/route.ts',
  'app/api/payouts/route.ts',
  'app/api/refunds/route.ts',
  'app/api/statements/route.ts'
];

function fixApiFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix GET method - remove userId from where clause
  const getWherePattern = /const where = \{[\s\S]*?userId: userId,?[\s\S]*?\};/g;
  const newGetWhere = `const where = {
      // For development, return all records regardless of user
      ...(search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } }
        ]
      }),
      ...(status && { status }),
      ...(category && { category })
    };`;

  if (content.match(getWherePattern)) {
    content = content.replace(getWherePattern, newGetWhere);
    modified = true;
  }

  // Fix additional queries that filter by userId
  const userIdFilterPattern = /where: \{ userId: userId \}/g;
  if (content.match(userIdFilterPattern)) {
    content = content.replace(userIdFilterPattern, 'where: {} // For development, no user filter');
    modified = true;
  }

  // Fix other userId filters
  const otherUserIdPattern = /userId: userId/g;
  if (content.match(otherUserIdPattern)) {
    content = content.replace(otherUserIdPattern, '// userId: userId // For development, no user filter');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  } else {
    console.log(`ℹ️  No changes needed: ${filePath}`);
  }
}

// Fix each API file
apiFiles.forEach(fixApiFile);

console.log('\n🎉 All API routes fixed for development!');
console.log('📝 Note: User authentication is disabled for development.');
console.log('🔒 Remember to re-enable authentication for production.'); 