#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Components that need fixing
const componentsToFix = [
  {
    file: 'templates/UpgradeToProPage/Pricing/index.tsx',
    issue: 'pricing variable not defined',
    fix: 'Add pricing data fetching'
  },
  {
    file: 'templates/UpgradeToProPage/Faq/index.tsx',
    issue: 'getFaqs() returns wrong structure',
    fix: 'Fix data structure handling'
  },
  {
    file: 'templates/Shop/ShopPage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Shop/ShopDetailsPage/Populars/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Public/PricingPage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Products/OverviewPage/ProductView/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/PromotePage/Engagement/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Products/OverviewPage/Products/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Products/DraftsPage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Products/CommentsPage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/MessagesPage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/HomePage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/HomePage/Overview/Balance/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/MessagesPage/Details/Chat/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/HomePage/Comments/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Income/EarningPage/TopEarningProducts/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Income/EarningPage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Income/EarningPage/Balance/Item/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Customers/OverviewPage/Overview/Chart/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Customers/OverviewPage/TrafficChannel/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Customers/OverviewPage/Messages/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Customers/OverviewPage/ShareProducts/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Customers/OverviewPage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Customers/OverviewPage/Countries/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/Customers/OverviewPage/ActiveTimes/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'templates/AffiliateCenterPage/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'components/Header/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'components/ProductView/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'components/Layout/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  },
  {
    file: 'components/CardChartPie/index.tsx',
    issue: 'getData() method not found',
    fix: 'Replace with proper data service method'
  }
];

function fixComponent(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix getData() calls
  if (content.includes('dataService.getData()')) {
    // Determine the appropriate method based on file path
    let method = 'getData';
    if (filePath.includes('Products')) method = 'getProducts';
    else if (filePath.includes('Customers')) method = 'getCustomers';
    else if (filePath.includes('Messages')) method = 'getMessages';
    else if (filePath.includes('Income')) method = 'getIncome';
    else if (filePath.includes('Shop')) method = 'getShopItems';
    else if (filePath.includes('Affiliate')) method = 'getAffiliateCenter';
    else if (filePath.includes('Faq')) method = 'getFaqs';
    else if (filePath.includes('Pricing')) method = 'getPricingPlans';
    else if (filePath.includes('Chart')) method = 'getChartData';
    else if (filePath.includes('ActiveTimes')) method = 'getActiveTimes';
    else if (filePath.includes('Countries')) method = 'getCountries';
    else if (filePath.includes('Balance')) method = 'getIncome';
    else if (filePath.includes('Comments')) method = 'getComments';
    else if (filePath.includes('Notifications')) method = 'getNotifications';
    else if (filePath.includes('Transactions')) method = 'getTransactions';
    else if (filePath.includes('Payouts')) method = 'getPayouts';
    else if (filePath.includes('Refunds')) method = 'getRefunds';
    else if (filePath.includes('Statements')) method = 'getStatements';
    else if (filePath.includes('Promote')) method = 'getPromotes';
    else if (filePath.includes('Engagement')) method = 'getPromotes';
    else if (filePath.includes('Insights')) method = 'getPromotes';
    else if (filePath.includes('Interactions')) method = 'getPromotes';
    else if (filePath.includes('List')) method = 'getPromotes';
    else if (filePath.includes('Overview')) method = 'getProducts';
    else if (filePath.includes('ProductView')) method = 'getProducts';
    else if (filePath.includes('Populars')) method = 'getProducts';
    else if (filePath.includes('Released')) method = 'getProducts';
    else if (filePath.includes('Scheduled')) method = 'getProducts';
    else if (filePath.includes('Drafts')) method = 'getProducts';
    else if (filePath.includes('TopEarningProducts')) method = 'getProducts';
    else if (filePath.includes('RecentEarnings')) method = 'getIncome';
    else if (filePath.includes('PayoutHistory')) method = 'getPayouts';
    else if (filePath.includes('CampaignEarning')) method = 'getAffiliateCenter';
    else if (filePath.includes('Performance')) method = 'getAffiliateCenter';
    else if (filePath.includes('Insights')) method = 'getAffiliateCenter';
    else if (filePath.includes('ShareProducts')) method = 'getProducts';
    else if (filePath.includes('Messages')) method = 'getMessages';
    else if (filePath.includes('Chat')) method = 'getMessages';
    else if (filePath.includes('TrafficChannel')) method = 'getChartData';
    else if (filePath.includes('ActiveTimes')) method = 'getActiveTimes';
    else if (filePath.includes('Countries')) method = 'getCountries';
    else if (filePath.includes('OverviewSlider')) method = 'getProducts';
    else if (filePath.includes('UnpublishItems')) method = 'getProducts';
    else if (filePath.includes('Compatibility')) method = 'getProducts';
    else if (filePath.includes('Header')) method = 'getNotifications';
    else if (filePath.includes('Layout')) method = 'getNotifications';

    content = content.replace(/dataService\.getData\(\)/g, `dataService.${method}()`);
    modified = true;
  }

  // Fix response.data references
  if (content.includes('response.data')) {
    // Determine the appropriate property based on method
    let property = 'data';
    if (content.includes('getProducts')) property = 'products';
    else if (content.includes('getCustomers')) property = 'customers';
    else if (content.includes('getMessages')) property = 'messages';
    else if (content.includes('getIncome')) property = 'income';
    else if (content.includes('getShopItems')) property = 'shopItems';
    else if (content.includes('getAffiliateCenter')) property = 'affiliateData';
    else if (content.includes('getFaqs')) property = 'faqs';
    else if (content.includes('getPricingPlans')) property = 'pricingPlans';
    else if (content.includes('getChartData')) property = 'chartData';
    else if (content.includes('getActiveTimes')) property = 'activeTimes';
    else if (content.includes('getCountries')) property = 'countries';
    else if (content.includes('getComments')) property = 'comments';
    else if (content.includes('getNotifications')) property = 'notifications';
    else if (content.includes('getTransactions')) property = 'transactions';
    else if (content.includes('getPayouts')) property = 'payouts';
    else if (content.includes('getRefunds')) property = 'refunds';
    else if (content.includes('getStatements')) property = 'statements';
    else if (content.includes('getPromotes')) property = 'promotes';

    content = content.replace(/response\.data/g, `response.${property}`);
    modified = true;
  }

  // Fix undefined variables
  if (content.includes('pricing.map') && !content.includes('const pricing')) {
    // Add pricing data fetching
    const pricingData = `
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await dataService.getPricingPlans();
        if (response.pricingPlans) {
          setPricing(response.pricingPlans);
        }
      } catch (err) {
        console.error('Error fetching pricing:', err);
      }
    };
    fetchPricing();
  }, []);`;

    // Insert after the first useState
    const useStateMatch = content.match(/const \[.*?\] = useState\(/);
    if (useStateMatch) {
      const insertIndex = content.indexOf(useStateMatch[0]) + useStateMatch[0].length;
      content = content.slice(0, insertIndex) + pricingData + content.slice(insertIndex);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  }

  return false;
}

function main() {
  console.log('🔧 Fixing remaining component issues...\n');

  let fixedCount = 0;
  let totalCount = componentsToFix.length;

  componentsToFix.forEach(({ file, issue, fix }) => {
    console.log(`📁 Processing: ${file}`);
    console.log(`   Issue: ${issue}`);
    console.log(`   Fix: ${fix}`);
    
    if (fixComponent(file)) {
      fixedCount++;
    }
    
    console.log('');
  });

  console.log(`📊 Summary:`);
  console.log(`✅ Successfully fixed: ${fixedCount} files`);
  console.log(`📁 Total files processed: ${totalCount}`);
  console.log(`🎯 Success rate: ${Math.round((fixedCount / totalCount) * 100)}%`);
}

main(); 