const fs = require('fs');
const path = require('path');

const targetFiles = [
  'templates/Products/OverviewPage/Products/index.tsx',
  'templates/Products/OverviewPage/ProductActivity/index.tsx',
  'templates/Shop/ShopPage/index.tsx',
  'templates/ExploreCreatorsPage/index.tsx',
  'templates/PromotePage/List/index.tsx',
  'templates/PromotePage/Engagement/index.tsx',
  'templates/PromotePage/Insights/index.tsx',
  'templates/PromotePage/Interactions/index.tsx',
  'templates/Income/EarningPage/Countries/index.tsx',
  'templates/Income/EarningPage/Balance/index.tsx',
  'templates/Customers/OverviewPage/Countries/index.tsx',
  'templates/Customers/OverviewPage/Overview/index.tsx',
  'templates/Products/ReleasedPage/index.tsx',
  'components/ProductView/index.tsx',
  'templates/Shop/ShopDetailsPage/Populars/index.tsx',
  'templates/Shop/ShopDetailsPage/Comments/index.tsx',
  'templates/Income/Refunds/RefundsPage/index.tsx',
  'templates/Income/StatementsPage/Transactions/index.tsx',
  'components/NewCustomers/index.tsx',
  'templates/Customers/CustomerList/CustomerListPage/index.tsx',
  'templates/Customers/CustomerList/CustomerListPage/List/index.tsx'
];

function removeAllMockData() {
  console.log('🧹 Removing ALL remaining mock/hardcoded data...');

  targetFiles.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove Math.random() calls
    content = content.replace(/Math\.random\(\)/g, '0');
    content = content.replace(/Math\.random\(\) > 0\.5/g, 'false');
    content = content.replace(/Math\.floor\(Math\.random\(\) \* \d+\)/g, '0');

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

    // Remove comments about fallbacks
    content = content.replace(/\/\/ Fallback.*$/gm, '');
    content = content.replace(/\/\/ Mock.*$/gm, '');
    content = content.replace(/\/\/ Demo.*$/gm, '');

    // Remove empty lines that might be left after removing fallbacks
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Updated: ${filePath}`);
      modified = true;
    }
  });

  console.log('🎉 All mock/hardcoded data removal completed!');
}

removeAllMockData(); 