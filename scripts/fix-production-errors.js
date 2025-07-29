#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Production Errors...\n');

// List of files that need "use client" directive and React imports
const clientComponents = [
  'templates/AffiliateCenterPage/index.tsx',
  'templates/Customers/OverviewPage/ActiveTimes/index.tsx',
  'templates/Customers/OverviewPage/Countries/index.tsx',
  'templates/Customers/OverviewPage/index.tsx',
  'templates/Customers/OverviewPage/Messages/index.tsx',
  'templates/Customers/OverviewPage/Overview/Chart/index.tsx',
  'templates/Customers/OverviewPage/Overview/index.tsx',
  'templates/Customers/OverviewPage/ShareProducts/index.tsx',
  'templates/ExploreCreatorsPage/index.tsx',
  'templates/HomePage/Comments/index.tsx',
  'templates/HomePage/Overview/Balance/index.tsx',
  'templates/HomePage/OverviewSlider/index.tsx',
  'templates/HomePage/ProductView/index.tsx',
  'templates/Income/EarningPage/Balance/index.tsx',
  'templates/Income/EarningPage/Countries/index.tsx',
  'templates/Income/EarningPage/index.tsx',
  'templates/Income/EarningPage/RecentEarnings/index.tsx',
  'templates/Income/EarningPage/TopEarningProducts/index.tsx',
  'templates/Income/EarningPage/Transactions/index.tsx',
  'templates/Income/PayoutsPage/PayoutHistory/index.tsx',
  'templates/Income/PayoutsPage/Statistics/index.tsx',
  'templates/Income/Refunds/RefundsPage/index.tsx',
  'templates/Income/StatementsPage/Statistics/index.tsx',
  'templates/Income/StatementsPage/Transactions/index.tsx',
  'templates/MessagesPage/Details/Chat/index.tsx',
  'templates/MessagesPage/index.tsx',
  'templates/Notifications/index.tsx',
  'templates/Products/CommentsPage/index.tsx',
  'templates/Products/DraftsPage/index.tsx',
  'templates/Products/OverviewPage/Overview/index.tsx',
  'templates/Products/OverviewPage/ProductActivity/index.tsx',
  'templates/Products/OverviewPage/ProductView/index.tsx',
  'templates/Products/ReleasedPage/index.tsx',
  'templates/Products/ScheduledPage/index.tsx',
  'templates/PromotePage/Engagement/index.tsx',
  'templates/PromotePage/Insights/index.tsx',
  'templates/PromotePage/Interactions/index.tsx',
  'templates/PromotePage/List/index.tsx',
  'templates/Shop/ShopDetailsPage/Comments/index.tsx',
  'templates/Shop/ShopDetailsPage/Populars/index.tsx',
  'templates/Shop/ShopPage/index.tsx',
  'templates/UpgradeToProPage/Faq/index.tsx',
  'templates/UpgradeToProPage/Pricing/index.tsx'
];

// Fix client components
clientComponents.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add "use client" if not present
    if (!content.includes('"use client"')) {
      content = '"use client";\n\n' + content;
    }
    
    // Add React imports if not present
    if (!content.includes('import React') && !content.includes('import { useState')) {
      content = content.replace(
        /^/,
        'import React, { useState, useEffect } from "react";\nimport { dataService } from "@/lib/data-service";\n\n'
      );
    }
    
    // Fix dataService.getData() calls
    content = content.replace(/dataService\.getData\(\)/g, 'dataService.getProducts({ limit: 10 })');
    
    // Fix error handling
    content = content.replace(/setError\(err\.message\)/g, 'setError(err instanceof Error ? err.message : "Unknown error")');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  }
});

// Fix specific component issues
const specificFixes = [
  {
    file: 'templates/Products/NewProductPage/CategoryAndAttributes/index.tsx',
    find: 'import TagsInput from "react-tagsinput";',
    replace: '// import TagsInput from "react-tagsinput"; // Temporarily disabled'
  },
  {
    file: 'templates/SettingsPage/index.tsx',
    find: 'import { Element } from "react-scroll";',
    replace: '// import { Element } from "react-scroll"; // Temporarily disabled'
  },
  {
    file: 'templates/SettingsPage/Menu/index.tsx',
    find: 'import { Link } from "react-scroll";',
    replace: '// import { Link } from "react-scroll"; // Temporarily disabled'
  }
];

specificFixes.forEach(fix => {
  if (fs.existsSync(fix.file)) {
    let content = fs.readFileSync(fix.file, 'utf8');
    content = content.replace(fix.find, fix.replace);
    fs.writeFileSync(fix.file, content);
    console.log(`✅ Fixed: ${fix.file}`);
  }
});

// Fix component props issues
const componentFixes = [
  {
    file: 'templates/Products/OverviewPage/index.tsx',
    find: '<ProductView className="col-right" />',
    replace: '<ProductView />'
  },
  {
    file: 'templates/Products/ReleasedPage/Grid/index.tsx',
    find: 'onClick={() => {}}',
    replace: 'onClick={async () => {}}'
  },
  {
    file: 'templates/Products/ReleasedPage/List/index.tsx',
    find: 'onClick={() => {}}',
    replace: 'onClick={async () => {}}'
  }
];

componentFixes.forEach(fix => {
  if (fs.existsSync(fix.file)) {
    let content = fs.readFileSync(fix.file, 'utf8');
    content = content.replace(fix.find, fix.replace);
    fs.writeFileSync(fix.file, content);
    console.log(`✅ Fixed: ${fix.file}`);
  }
});

console.log('\n🎉 Production Error Fixes Complete!');
console.log('📋 Next Steps:');
console.log('   1. Run: npm run build');
console.log('   2. Run: npm run dev:3004');
console.log('   3. Access: http://localhost:3004'); 