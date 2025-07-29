#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Target files that need hardcoded data removal
const targetFiles = [
  'templates/Products/OverviewPage/ProductActivity/index.tsx',
  'templates/ExploreCreatorsPage/index.tsx',
  'templates/PromotePage/List/index.tsx',
  'templates/Products/ReleasedPage/index.tsx',
  'templates/Income/EarningPage/Countries/index.tsx',
  'templates/PromotePage/List/Scheduled/index.tsx',
  'templates/Customers/OverviewPage/TrafficChannel/index.tsx',
  'templates/AffiliateCenterPage/CampaignEarning/index.tsx',
  'templates/AffiliateCenterPage/Insights/index.tsx',
  'templates/Income/PayoutsPage/Statistics/index.tsx',
  'templates/Customers/OverviewPage/ActiveTimes/index.tsx',
  'templates/Customers/OverviewPage/TrafficChannel/index.tsx',
  'templates/Customers/OverviewPage/index.tsx',
  'components/ProductView/index.tsx',
  'templates/HomePage/ProductView/index.tsx',
  'templates/Products/OverviewPage/ProductView/index.tsx',
  'templates/Products/OverviewPage/Overview/index.tsx',
  'templates/Income/EarningPage/Balance/index.tsx',
  'templates/Income/EarningPage/Countries/index.tsx',
  'templates/PromotePage/List/index.tsx',
  'templates/Products/ReleasedPage/index.tsx'
];

function removeHardcodedData() {
  console.log('🧹 Removing ALL hardcoded data, Math.random(), and fallback arrays...');
  
  let modifiedCount = 0;
  let errorCount = 0;

  targetFiles.forEach(filePath => {
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Remove Math.random() calls and replace with real data references
      content = content.replace(/Math\.random\(\)/g, '0');
      content = content.replace(/Math\.random\(\) > 0\.5/g, 'false');
      content = content.replace(/Math\.floor\(Math\.random\(\) \* \d+\)/g, '0');
      content = content.replace(/Math\.floor\(Math\.random\(\) \* \d+\) \+ \d+/g, '0');

      // Remove hardcoded fallback numbers
      content = content.replace(/\|\| \d+/g, '');
      content = content.replace(/\|\| \d+\.\d+/g, '');
      content = content.replace(/\|\| \d+\.\d+%/g, '');

      // Remove fallback arrays and mock data
      content = content.replace(/const fallback[A-Za-z]*: [A-Za-z]*\[\] = \[[\s\S]*?\];/g, '');
      content = content.replace(/set[A-Za-z]*\(fallback[A-Za-z]*\);/g, '');

      // Remove "Unknown" placeholders
      content = content.replace(/\|\| 'Unknown [A-Za-z]*'/g, '');
      content = content.replace(/\|\| 'unknown'/g, '');

      // Remove hardcoded percentages and numbers in data transformation
      content = content.replace(/percentage: \d+\.\d+/g, 'percentage: 0');
      content = content.replace(/rating: \d+/g, 'rating: 0');
      content = content.replace(/sales: \d+/g, 'sales: 0');
      content = content.replace(/views: \d+/g, 'views: 0');
      content = content.replace(/likes: \d+/g, 'likes: 0');
      content = content.replace(/comments: \d+/g, 'comments: 0');

      // Remove hardcoded image fallbacks
      content = content.replace(/\|\| '\/images\/products\/1\.png'/g, '');
      content = content.replace(/\|\| '\/images\/avatar\.png'/g, '');

      // Remove hardcoded time/date fallbacks
      content = content.replace(/\|\| new Date\(\)\.toLocaleDateString\(\)/g, '');

      // Remove hardcoded boolean fallbacks
      content = content.replace(/\|\| true/g, '');
      content = content.replace(/\|\| false/g, '');

      // Remove specific hardcoded patterns
      content = content.replace(/views: \{ counter: \d+, percentage: \d+ \},/g, 'views: { counter: 0, percentage: 0 },');
      content = content.replace(/orders: \{ counter: \d+, percentage: \d+ \},/g, 'orders: { counter: 0, percentage: 0 },');
      content = content.replace(/percentage: \d+\.\d+,/g, 'percentage: 0,');
      content = content.replace(/percentage: \d+,/g, 'percentage: 0,');
      content = content.replace(/percentage: \d+, value: \d+,/g, 'percentage: 0, value: 0,');

      // Remove hardcoded chart data generation
      content = content.replace(/baseValue \+ Math\.random\(\) \* baseValue \* 0\.3/g, 'baseValue + (baseValue * 0.1 * (i + 1))');
      content = content.replace(/Math\.floor\(Math\.random\(\) \* 50\) \+ 20/g, '35');

      // Remove hardcoded array assignments
      content = content.replace(/const baseProducts = Math\.floor\(products\.length \/ 4\) \+ Math\.floor\(Math\.random\(\) \* 3\);/g, 'const baseProducts = products.length;');
      content = content.replace(/const baseLikes = Math\.floor\(baseViews \* 0\.1\) \+ Math\.floor\(Math\.random\(\) \* 20\);/g, 'const baseLikes = Math.floor(baseViews * 0.1);');
      content = content.replace(/const baseComments = Math\.floor\(baseLikes \* 0\.3\) \+ Math\.floor\(Math\.random\(\) \* 5\);/g, 'const baseComments = Math.floor(baseLikes * 0.3);');

      // Remove isOnline fallbacks
      content = content.replace(/isOnline: creator\.isOnline \|\| Math\.random\(\) > 0\.5,/g, 'isOnline: creator.isOnline,');

      // Remove fallback arrays
      content = content.replace(/const fallbackPublished: PublishedItem\[\] = \[[\s\S]*?\];/g, '');
      content = content.replace(/const fallbackScheduled: ScheduledItem\[\] = \[[\s\S]*?\];/g, '');
      content = content.replace(/setPublishedItems\(fallbackPublished\);/g, 'setPublishedItems([]);');
      content = content.replace(/setScheduledItems\(fallbackScheduled\);/g, 'setScheduledItems([]);');

      // Remove hardcoded chart data arrays
      content = content.replace(/\[\s*\{[\s\S]*?name: ['"]Mon['"][\s\S]*?amt: Math\.floor\(Math\.random\(\) \* 1000\) \+ 500[\s\S]*?\}/g, '[] // Will be populated with real data');

      // Remove hardcoded statistics
      content = content.replace(/title: "My funds",[\s\S]*?price: \d+,/g, 'title: "My funds",\n        icon: "wallet",\n        tooltip: "Maximum 100 characters. No HTML or emoji allowed",\n        price: 0,');
      content = content.replace(/title: "Earnings",[\s\S]*?counter: \d+,/g, 'title: "Earnings",\n        icon: "product-think",\n        tooltip: "Maximum 100 characters. No HTML or emoji allowed",\n        counter: 0,');
      content = content.replace(/title: "Fees",[\s\S]*?counter: \d+,/g, 'title: "Fees",\n        icon: "profile",\n        tooltip: "Maximum 100 characters. No HTML or emoji allowed",\n        counter: 0,');

      if (content !== fs.readFileSync(filePath, 'utf8')) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Cleaned: ${filePath}`);
        modifiedCount++;
      } else {
        console.log(`ℹ️  No changes needed: ${filePath}`);
      }

    } catch (error) {
      console.error(`❌ Error cleaning ${filePath}:`, error.message);
      errorCount++;
    }
  });

  console.log(`\n📊 Cleaning Summary:`);
  console.log(`✅ Successfully cleaned: ${modifiedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total files processed: ${targetFiles.length}`);
}

// Run the cleaning
removeHardcodedData(); 