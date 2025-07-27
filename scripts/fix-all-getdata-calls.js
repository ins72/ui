#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping of file patterns to appropriate data service methods
const fileMethodMap = {
  'AffiliateCenterPage/ProductView': 'getChartData',
  'Income/EarningPage/Transactions': 'getTransactions',
  'Income/EarningPage/Countries': 'getCountries',
  'UpgradeToProPage/Faq': 'getFaqs',
  'Income/EarningPage/TopEarningProducts': 'getProducts',
  'Shop/ShopDetailsPage/Comments': 'getComments',
  'Shop/ShopPage': 'getShopItems',
  'Income/EarningPage': 'getIncome',
  'Income/EarningPage/RecentEarnings': 'getIncome',
  'Income/StatementsPage/Transactions': 'getTransactions',
  'Income/EarningPage/Balance': 'getIncome',
  'PromotePage/Engagement': 'getPromote',
  'PromotePage/List': 'getPromote',
  'PromotePage/Interactions': 'getPromote',
  'Income/PayoutsPage/PayoutHistory': 'getPayouts',
  'PromotePage/Insights': 'getPromote',
  'Income/Refunds/RefundsPage': 'getRefunds',
  'Notifications': 'getNotifications',
  'Products/ScheduledPage': 'getProducts',
  'Products/OverviewPage/ProductView': 'getChartData',
  'Products/OverviewPage/ProductActivity': 'getProducts',
  'Products/OverviewPage/Overview': 'getProducts',
  'Products/ReleasedPage': 'getProducts',
  'Products/CommentsPage': 'getComments',
  'Products/DraftsPage': 'getProducts',
  'AffiliateCenterPage/Performance': 'getAffiliateCenter',
  'AffiliateCenterPage/Insights': 'getAffiliateCenter',
  'MessagesPage': 'getMessages',
  'AffiliateCenterPage': 'getAffiliateCenter',
  'HomePage/ProductView': 'getChartData',
  'HomePage/OverviewSlider': 'getProducts',
  'HomePage/Comments': 'getComments',
  'ExploreCreatorsPage': 'getCreators',
  'AffiliateCenterPage/CampaignEarning': 'getAffiliateCenter',
  'HomePage/Overview/Balance': 'getChartData',
  'Customers/CustomerList/DetailsPage': 'getCustomers',
  'Customers/OverviewPage/ShareProducts': 'getProducts',
  'Customers/OverviewPage/Countries': 'getCountries',
  'Customers/OverviewPage/Messages': 'getMessages',
  'Customers/OverviewPage/Overview': 'getCustomers',
  'Customers/OverviewPage': 'getCustomers',
  'Customers/OverviewPage/Overview/Chart': 'getChartData',
  'Customers/OverviewPage/ActiveTimes': 'getActiveTimes',
  'Customers/CustomerList/CustomerListPage': 'getCustomers',
  'UnpublishItems': 'getProducts',
  'ProductView': 'getChartData',
  'Header/SearchGlobal': 'getProducts',
  'Header/Notifications': 'getNotifications',
  'Header/Messages': 'getMessages',
  'Compatibility': 'getProducts'
};

function fixGetDataCalls() {
  console.log('🔧 Fixing all getData() calls...');
  
  let fixedCount = 0;
  
  Object.entries(fileMethodMap).forEach(([filePattern, method]) => {
    const files = findFilesByPattern(filePattern);
    
    files.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Replace getData() with the appropriate method
        content = content.replace(
          /const response = await dataService\.getData\(\);/g,
          `const response = await dataService.${method}();`
        );
        
        // Add appropriate parameters for specific methods
        if (method === 'getProducts') {
          content = content.replace(
            /const response = await dataService\.getProducts\(\);/g,
            'const response = await dataService.getProducts({ limit: 10 });'
          );
        } else if (method === 'getChartData') {
          content = content.replace(
            /const response = await dataService\.getChartData\(\);/g,
            'const response = await dataService.getChartData({ type: "productView" });'
          );
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          console.log(`✅ Fixed ${file}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
      }
    });
  });
  
  console.log(`🎉 Fixed ${fixedCount} files!`);
}

function findFilesByPattern(pattern) {
  const files = [];
  const searchDirs = ['templates', 'components'];
  
  searchDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const found = findFilesRecursive(dir, pattern);
      files.push(...found);
    }
  });
  
  return files;
}

function findFilesRecursive(dir, pattern) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFilesRecursive(fullPath, pattern));
    } else if (item.endsWith('.tsx') && fullPath.includes(pattern)) {
      files.push(fullPath);
    }
  });
  
  return files;
}

fixGetDataCalls(); 