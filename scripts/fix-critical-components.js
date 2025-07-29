#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Critical components that need proper data service integration
const criticalComponents = [
  {
    file: 'templates/HomePage/index.tsx',
    mockImport: 'popularProducts',
    serviceMethod: 'getProducts',
    params: { limit: 5, status: 'released' }
  },
  {
    file: 'templates/Products/OverviewPage/Products/index.tsx',
    mockImport: 'products',
    serviceMethod: 'getProducts',
    params: { limit: 10 }
  },
  {
    file: 'templates/Customers/CustomerList/CustomerListPage/index.tsx',
    mockImport: 'customers',
    serviceMethod: 'getCustomers',
    params: { limit: 20 }
  },
  {
    file: 'templates/Income/EarningPage/index.tsx',
    mockImport: 'popularProducts',
    serviceMethod: 'getProducts',
    params: { limit: 5 }
  },
  {
    file: 'templates/MessagesPage/index.tsx',
    mockImport: 'messages',
    serviceMethod: 'getMessages',
    params: { limit: 10 }
  },
  {
    file: 'templates/Notifications/index.tsx',
    mockImport: 'allNotifications',
    serviceMethod: 'getNotifications',
    params: { limit: 10 }
  },
  {
    file: 'templates/Shop/ShopPage/index.tsx',
    mockImport: 'shopItems',
    serviceMethod: 'getShopItems',
    params: { limit: 12 }
  },
  {
    file: 'templates/ExploreCreatorsPage/index.tsx',
    mockImport: 'creators',
    serviceMethod: 'getCreators',
    params: { limit: 20 }
  }
];

function fixCriticalComponents() {
  console.log('🔧 Fixing critical components with proper data service integration...');
  
  let fixedCount = 0;
  let errorCount = 0;

  criticalComponents.forEach(({ file, mockImport, serviceMethod, params }) => {
    try {
      if (!fs.existsSync(file)) {
        console.log(`⚠️  File not found: ${file}`);
        return;
      }

      let content = fs.readFileSync(file, 'utf8');
      let modified = false;

      // Add "use client" directive if not present
      if (!content.includes('"use client"')) {
        content = `"use client";\n\n${content}`;
        modified = true;
      }

      // Add dataService import if not present
      if (!content.includes('dataService')) {
        content = content.replace(
          /import React/g,
          'import React\nimport { dataService } from "@/lib/data-service"'
        );
        modified = true;
      }

      // Add useState and useEffect imports if not present
      if (!content.includes('useState') || !content.includes('useEffect')) {
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

      // Remove mock import
      const mockImportRegex = new RegExp(`import \\{ [^}]*${mockImport}[^}]*\\} from "@/mocks/[^"]*";?\\n?`, 'g');
      if (mockImportRegex.test(content)) {
        content = content.replace(mockImportRegex, '');
        modified = true;
      }

      // Find the main component and add state management
      const componentMatch = content.match(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        
        // Check if component already has state management
        if (!content.includes('useState') || !content.includes('useEffect')) {
          const stateAndFetching = `
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dataService.${serviceMethod}(${JSON.stringify(params)});
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
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`✅ Fixed: ${file} (${mockImport} → ${serviceMethod})`);
        fixedCount++;
      } else {
        console.log(`ℹ️  No changes needed: ${file}`);
      }

    } catch (error) {
      console.error(`❌ Error fixing ${file}:`, error.message);
      errorCount++;
    }
  });

  console.log(`\n📊 Fix Summary:`);
  console.log(`✅ Successfully fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total files processed: ${criticalComponents.length}`);
}

// Run the fixes
fixCriticalComponents(); 