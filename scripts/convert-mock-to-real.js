#!/usr/bin/env node

/**
 * Script to help identify and convert mock data usage to real database data
 * 
 * Usage: node scripts/convert-mock-to-real.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Mock data files that need to be converted
const mockFiles = [
  'pricing.tsx',
  'faqs.tsx',
  'promote.tsx',
  'refunds.tsx',
  'shopItems.tsx',
  'statements.tsx',
  'transactions.tsx',
  'followings.tsx',
  'income.tsx',
  'messages.tsx',
  'notifications.tsx',
  'payouts.tsx',
  'products.tsx',
  'customers.tsx',
  'dashboard.tsx',
  'followers.tsx',
  'charts.tsx',
  'comments.tsx',
  'compatibility.tsx',
  'countries.tsx',
  'creators.tsx',
  'activeTimes.tsx',
  'affiliate-center.tsx'
];

// API routes that have been created
const apiRoutes = [
  'customers',
  'products',
  'transactions',
  'refunds',
  'statements',
  'income',
  'comments',
  'followers',
  'creators',
  'shop-items',
  'active-times',
  'countries',
  'promote',
  'affiliate-center',
  'payouts',
  'notifications',
  'messages',
  'faqs',
  'pricing'
];

// Data service methods mapping
const dataServiceMethods = {
  'customers': 'getCustomers',
  'products': 'getProducts',
  'transactions': 'getTransactions',
  'refunds': 'getRefunds',
  'statements': 'getStatements',
  'income': 'getIncome',
  'comments': 'getComments',
  'followers': 'getFollowers',
  'followings': 'getFollowers',
  'creators': 'getCreators',
  'shopItems': 'getShopItems',
  'activeTimes': 'getActiveTimes',
  'countries': 'getCountries',
  'promote': 'getPromote',
  'affiliate-center': 'getAffiliateCenter',
  'payouts': 'getPayouts',
  'notifications': 'getNotifications',
  'messages': 'getMessages',
  'faqs': 'getFaqs',
  'pricing': 'getPricing'
};

function findMockUsage() {
  console.log('🔍 Finding mock data usage...\n');
  
  const mockUsage = {};
  
  mockFiles.forEach(mockFile => {
    const mockName = mockFile.replace('.tsx', '');
    try {
      // Search for imports of this mock file using PowerShell on Windows
      const result = execSync(`powershell -Command "Get-ChildItem -Recurse -Include '*.tsx','*.ts' | Select-String 'from.*mocks/${mockName}' | ForEach-Object { $_.Filename }"`, { encoding: 'utf8' });
      const lines = result.trim().split('\n').filter(line => line);
      
      if (lines.length > 0) {
        mockUsage[mockName] = lines.map(line => {
          return line.trim().replace(/\\/g, '/');
        });
      }
    } catch (error) {
      // No usage found
    }
  });
  
  return mockUsage;
}

function generateConversionTemplate(mockName, files) {
  const dataServiceMethod = dataServiceMethods[mockName];
  
  if (!dataServiceMethod) {
    return `// No data service method found for ${mockName}`;
  }
  
  return `// Convert ${mockName} usage in these files:
${files.map(file => `// - ${file}`).join('\n')}

// Template for conversion:

"use client";

import { useEffect, useState } from "react";
import { dataService } from "@/lib/data-service";

// Add proper TypeScript interface for your data
interface ${mockName.charAt(0).toUpperCase() + mockName.slice(1)}Data {
  id: string;
  // Add other properties based on your data structure
}

const Component = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.${dataServiceMethod}();
        if (response.data) {
          setData(response.data);
        }
      } catch (err) {
        console.error('Error fetching ${mockName}:', err);
        setError('Failed to load ${mockName}');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // Replace your mock data usage with data.map()
    <div>
      {data.map(item => (
        <div key={item.id}>
          {/* Your component content */}
        </div>
      ))}
    </div>
  );
};

export default Component;`;
}

function main() {
  console.log('🚀 Mock to Real Data Conversion Helper\n');
  
  const mockUsage = findMockUsage();
  
  console.log('📊 Summary of mock data usage:\n');
  
  Object.entries(mockUsage).forEach(([mockName, files]) => {
    console.log(`📁 ${mockName}:`);
    files.forEach(file => {
      console.log(`   - ${file}`);
    });
    console.log('');
  });
  
  console.log('🔄 Conversion templates:\n');
  
  Object.entries(mockUsage).forEach(([mockName, files]) => {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`Converting ${mockName}`);
    console.log(`${'='.repeat(50)}`);
    console.log(generateConversionTemplate(mockName, files));
  });
  
  console.log('\n📋 Next Steps:');
  console.log('1. Start with high-priority components (products, customers, income)');
  console.log('2. Convert one component at a time');
  console.log('3. Test each conversion thoroughly');
  console.log('4. Remove mock data files once all components are converted');
  console.log('\n📚 See MOCK_TO_REAL_DATA_MIGRATION.md for detailed instructions');
}

if (require.main === module) {
  main();
}

module.exports = { findMockUsage, generateConversionTemplate }; 