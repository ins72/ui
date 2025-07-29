#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Temporarily disabling authentication for development...\n');

// List of API route files that need authentication fixes
const apiFiles = [
  'app/api/products/route.ts',
  'app/api/customers/route.ts',
  'app/api/transactions/route.ts',
  'app/api/comments/route.ts',
  'app/api/messages/route.ts',
  'app/api/notifications/route.ts',
  'app/api/income/route.ts',
  'app/api/countries/route.ts',
  'app/api/shop-items/route.ts',
  'app/api/chart-data/route.ts',
  'app/api/active-times/route.ts',
  'app/api/promote/route.ts',
  'app/api/payouts/route.ts',
  'app/api/refunds/route.ts',
  'app/api/statements/route.ts',
  'app/api/creators/route.ts',
  'app/api/pricing/route.ts',
  'app/api/faqs/route.ts',
  'app/api/affiliate-center/route.ts'
];

apiFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace authentication check with a default user ID for development
    content = content.replace(
      /if \(!session\?\.user\?\.id\) \{[\s\S]*?return NextResponse\.json\([\s\S]*?status: 401[\s\S]*?\};[\s\S]*?\}/g,
      `// Temporarily disabled authentication for development
    const userId = session?.user?.id || 'test-user-id';`
    );
    
    // Replace session.user.id with userId
    content = content.replace(/session\.user\.id/g, 'userId');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  }
});

console.log('\n🎉 Authentication temporarily disabled for development!');
console.log('📋 Note: This is for development only. Re-enable authentication for production.'); 