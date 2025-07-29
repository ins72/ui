#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping of mock imports to data service methods
const mockToServiceMap = {
  'products': 'getProducts',
  'customers': 'getCustomers',
  'transactions': 'getTransactions',
  'comments': 'getComments',
  'messages': 'getMessages',
  'notifications': 'getNotifications',
  'refunds': 'getRefunds',
  'income': 'getIncome',
  'countries': 'getCountries',
  'creators': 'getCreators',
  'shopItems': 'getShopItems',
  'activeTimes': 'getActiveTimes',
  'promote': 'getPromotes',
  'affiliate-center': 'getAffiliateCenter',
  'payouts': 'getPayouts',
  'faqs': 'getFaqs',
  'pricing': 'getPricing',
  'charts': 'getChartData',
  'statements': 'getStatements',
  'followers': 'getFollowers',
  'followings': 'getFollowers',
  'dashboard': 'getDashboardStats',
  'compatibility': 'getCompatibility'
};

// Files that need conversion (from the grep search results)
const targetFiles = [
  'templates/UpgradeToProPage/Pricing/index.tsx',
  'templates/UpgradeToProPage/Faq/index.tsx',
  'templates/AffiliateCenterPage/ProductView/index.tsx',
  'templates/Shop/ShopDetailsPage/Populars/index.tsx',
  'templates/Shop/ShopPage/index.tsx',
  'templates/Shop/ShopDetailsPage/Comments/index.tsx',
  'templates/PromotePage/Engagement/index.tsx',
  'templates/PromotePage/Interactions/index.tsx',
  'templates/PromotePage/List/index.tsx',
  'templates/PromotePage/Insights/index.tsx',
  'templates/Products/DraftsPage/index.tsx',
  'templates/Products/OverviewPage/Overview/index.tsx',
  'templates/Products/OverviewPage/ProductView/index.tsx',
  'templates/Products/OverviewPage/ProductActivity/index.tsx',
  'templates/Products/OverviewPage/Products/index.tsx',
  'templates/Products/ScheduledPage/index.tsx',
  'templates/Products/ReleasedPage/index.tsx',
  'templates/AffiliateCenterPage/Performance/index.tsx',
  'templates/AffiliateCenterPage/Insights/index.tsx',
  'templates/Products/CommentsPage/index.tsx',
  'templates/AffiliateCenterPage/index.tsx',
  'templates/Notifications/index.tsx',
  'templates/AffiliateCenterPage/CampaignEarning/index.tsx',
  'templates/MessagesPage/index.tsx',
  'templates/MessagesPage/Details/Chat/index.tsx',
  'templates/HomePage/index.tsx',
  'templates/Income/StatementsPage/Statistics/index.tsx',
  'templates/Income/EarningPage/Transactions/index.tsx',
  'templates/Income/StatementsPage/Transactions/index.tsx',
  'templates/Income/EarningPage/TopEarningProducts/index.tsx',
  'templates/HomePage/ProductView/index.tsx',
  'templates/Income/EarningPage/index.tsx',
  'templates/Income/EarningPage/RecentEarnings/index.tsx',
  'templates/HomePage/OverviewSlider/index.tsx',
  'templates/Income/EarningPage/Countries/index.tsx',
  'templates/HomePage/Overview/Balance/index.tsx',
  'templates/Income/EarningPage/Balance/index.tsx',
  'templates/HomePage/Comments/index.tsx',
  'templates/Income/Refunds/RefundsPage/index.tsx',
  'templates/Income/PayoutsPage/Statistics/index.tsx',
  'templates/ExploreCreatorsPage/index.tsx',
  'templates/Income/PayoutsPage/PayoutHistory/index.tsx',
  'templates/Customers/CustomerList/DetailsPage/index.tsx',
  'templates/Customers/OverviewPage/TrafficChannel/index.tsx',
  'templates/Customers/OverviewPage/Messages/index.tsx',
  'templates/Customers/CustomerList/DetailsPage/Details/PurchaseHistory/index.tsx',
  'templates/Customers/OverviewPage/ShareProducts/index.tsx',
  'templates/Customers/OverviewPage/Overview/index.tsx',
  'templates/Customers/OverviewPage/index.tsx',
  'templates/Customers/OverviewPage/Countries/index.tsx',
  'templates/Customers/OverviewPage/Overview/Chart/index.tsx',
  'templates/Customers/CustomerList/CustomerListPage/index.tsx',
  'templates/Customers/OverviewPage/ActiveTimes/index.tsx',
  'components/UnpublishItems/index.tsx',
  'components/ProductView/index.tsx',
  'components/NewCustomers/index.tsx',
  'components/Header/SearchGlobal/index.tsx',
  'components/Header/Notifications/index.tsx',
  'components/Header/Messages/index.tsx',
  'components/Compatibility/index.tsx'
];

function convertMockImports() {
  console.log('🔄 Converting all mock data imports to real data service calls...');
  
  let convertedCount = 0;
  let errorCount = 0;

  targetFiles.forEach(filePath => {
    try {
      if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Check if file already has "use client" directive
      const hasUseClient = content.includes('"use client"');
      const hasDataService = content.includes('dataService');

      // Add "use client" if not present and not already using dataService
      if (!hasUseClient && !hasDataService) {
        content = `"use client";\n\n${content}`;
        modified = true;
      }

      // Add useState and useEffect imports if not present
      if (!content.includes('useState') && !content.includes('useEffect')) {
        content = content.replace(
          /import \{ ([^}]+) \} from "react";/g,
          'import { $1, useState, useEffect } from "react";'
        );
        if (!content.includes('useState')) {
          content = content.replace(
            /import React from "react";/g,
            'import React, { useState, useEffect } from "react";'
          );
        }
      }

      // Replace mock imports with dataService
      Object.entries(mockToServiceMap).forEach(([mockName, serviceMethod]) => {
        const importRegex = new RegExp(`import \\{ [^}]*\\} from "@/mocks/${mockName}";?`, 'g');
        if (importRegex.test(content)) {
          // Remove the mock import
          content = content.replace(importRegex, '');
          
          // Add dataService import if not present
          if (!content.includes('dataService')) {
            content = content.replace(
              /import React/g,
              'import React\nimport { dataService } from "@/lib/data-service"'
            );
          }
          
          modified = true;
        }
      });

      // Convert component to use real data
      if (modified) {
        // Find the main component function
        const componentMatch = content.match(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/);
        if (componentMatch) {
          const componentName = componentMatch[1];
          
          // Add state and data fetching logic
          const stateAndFetching = `
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.getData();
        if (response.data) {
          setData(response.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;`;

          // Insert the state and fetching logic after the component declaration
          content = content.replace(
            new RegExp(`const\\s+${componentName}\\s*=\\s*\\([^)]*\\)\\s*=>\\s*\\{`),
            `const ${componentName} = ({}) => {${stateAndFetching}`
          );
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Converted: ${filePath}`);
        convertedCount++;
      } else {
        console.log(`ℹ️  No changes needed: ${filePath}`);
      }

    } catch (error) {
      console.error(`❌ Error converting ${filePath}:`, error.message);
      errorCount++;
    }
  });

  console.log(`\n📊 Conversion Summary:`);
  console.log(`✅ Successfully converted: ${convertedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total files processed: ${targetFiles.length}`);
}

// Run the conversion
convertMockImports(); 