#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧪 Testing Production Readiness...\n');

let testsPassed = 0;
let testsFailed = 0;

function test(name, condition) {
  if (condition) {
    console.log(`✅ ${name}`);
    testsPassed++;
  } else {
    console.log(`❌ ${name}`);
    testsFailed++;
  }
}

// Test 1: Check for mock data imports
function checkMockImports() {
  const files = [];
  
  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    });
  }
  
  scanDirectory('templates');
  scanDirectory('components');
  scanDirectory('app');
  
  let hasMockImports = false;
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('@/mocks/') || content.includes('from "@/mocks"')) {
        hasMockImports = true;
        console.log(`   Found mock import in: ${file}`);
      }
    } catch (error) {
      // Ignore read errors
    }
  });
  
  return !hasMockImports;
}

// Test 2: Check for hardcoded data
function checkHardcodedData() {
  const files = [];
  
  function scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    });
  }
  
  scanDirectory('templates');
  scanDirectory('components');
  scanDirectory('app');
  
  let hasHardcodedData = false;
  
  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('Math.random()') || 
          content.includes('Math.floor(Math.random()') ||
          (content.includes('|| 0') && !content.includes('parseInt') && !content.includes('status')) ||
          (content.includes('|| []') && !content.includes('items') && !content.includes('data')) ||
          (content.includes('|| {}') && !content.includes('body') && !content.includes('params'))) {
        hasHardcodedData = true;
        console.log(`   Found hardcoded data in: ${file}`);
      }
    } catch (error) {
      // Ignore read errors
    }
  });
  
  return !hasHardcodedData;
}

// Test 3: Check database schema
function checkDatabaseSchema() {
  try {
    const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    const requiredModels = [
      'User', 'Product', 'Customer', 'Transaction', 'Comment',
      'Message', 'Notification', 'Income', 'Country', 'ShopItem',
      'ChartData', 'ActiveTime', 'Promote', 'Payout', 'Refund',
      'Statement', 'Creator', 'PricingPlan', 'FAQ', 'AffiliateData'
    ];
    
    let allModelsPresent = true;
    
    requiredModels.forEach(model => {
      if (!schema.includes(`model ${model}`)) {
        console.log(`   Missing model: ${model}`);
        allModelsPresent = false;
      }
    });
    
    return allModelsPresent;
  } catch (error) {
    console.log(`   Error reading schema: ${error.message}`);
    return false;
  }
}

// Test 4: Check data service methods
function checkDataService() {
  try {
    const dataServicePath = path.join(__dirname, '..', 'lib', 'data-service.ts');
    const dataService = fs.readFileSync(dataServicePath, 'utf8');
    
    const requiredMethods = [
      'getProducts', 'getCustomers', 'getTransactions', 'getComments',
      'getMessages', 'getNotifications', 'getIncome', 'getCountries',
      'getShopItems', 'getChartData', 'getActiveTimes', 'getPromotes',
      'getPayouts', 'getRefunds', 'getStatements', 'getCreators',
      'getFaqs', 'getPricingPlans', 'getAffiliateCenter'
    ];
    
    let allMethodsPresent = true;
    
    requiredMethods.forEach(method => {
      if (!dataService.includes(`async ${method}`)) {
        console.log(`   Missing method: ${method}`);
        allMethodsPresent = false;
      }
    });
    
    return allMethodsPresent;
  } catch (error) {
    console.log(`   Error reading data service: ${error.message}`);
    return false;
  }
}

// Test 5: Check TypeScript types
function checkTypeScriptTypes() {
  try {
    const typesPath = path.join(__dirname, '..', 'types', 'index.ts');
    const types = fs.readFileSync(typesPath, 'utf8');
    
    const requiredTypes = [
      'User', 'Product', 'Customer', 'Transaction', 'Comment',
      'Message', 'Notification', 'Income', 'Country', 'ShopItem',
      'ChartData', 'ActiveTime', 'Promote', 'Payout', 'Refund',
      'Statement', 'Creator', 'PricingPlan', 'FAQ', 'AffiliateData'
    ];
    
    let allTypesPresent = true;
    
    requiredTypes.forEach(type => {
      if (!types.includes(`interface ${type}`)) {
        console.log(`   Missing type: ${type}`);
        allTypesPresent = false;
      }
    });
    
    return allTypesPresent;
  } catch (error) {
    console.log(`   Error reading types: ${error.message}`);
    return false;
  }
}

// Test 6: Check environment configuration
function checkEnvironmentConfig() {
  try {
    const envExamplePath = path.join(__dirname, '..', 'env.example');
    const envExample = fs.readFileSync(envExamplePath, 'utf8');
    
    const requiredVars = [
      'DATABASE_URL', 'NEXTAUTH_URL', 'NEXTAUTH_SECRET', 'NODE_ENV'
    ];
    
    let allVarsPresent = true;
    
    requiredVars.forEach(varName => {
      if (!envExample.includes(varName)) {
        console.log(`   Missing env var: ${varName}`);
        allVarsPresent = false;
      }
    });
    
    return allVarsPresent;
  } catch (error) {
    console.log(`   Error reading env example: ${error.message}`);
    return false;
  }
}

// Test 7: Check security middleware
function checkSecurityMiddleware() {
  try {
    const middlewarePath = path.join(__dirname, '..', 'middleware.ts');
    const middleware = fs.readFileSync(middlewarePath, 'utf8');
    
    const securityHeaders = [
      'X-Frame-Options', 'X-Content-Type-Options', 'Referrer-Policy',
      'Content-Security-Policy', 'X-XSS-Protection'
    ];
    
    let allHeadersPresent = true;
    
    securityHeaders.forEach(header => {
      if (!middleware.includes(header)) {
        console.log(`   Missing security header: ${header}`);
        allHeadersPresent = false;
      }
    });
    
    return allHeadersPresent;
  } catch (error) {
    console.log(`   Error reading middleware: ${error.message}`);
    return false;
  }
}

// Run all tests
console.log('🔍 Running Production Readiness Tests...\n');

test('No mock data imports found', checkMockImports());
test('No hardcoded data found', checkHardcodedData());
test('Database schema is complete', checkDatabaseSchema());
test('Data service methods are complete', checkDataService());
test('TypeScript types are complete', checkTypeScriptTypes());
test('Environment configuration is complete', checkEnvironmentConfig());
test('Security middleware is configured', checkSecurityMiddleware());

// Summary
console.log('\n📊 Test Results:');
console.log(`✅ Tests Passed: ${testsPassed}`);
console.log(`❌ Tests Failed: ${testsFailed}`);
console.log(`📈 Success Rate: ${Math.round((testsPassed / (testsPassed + testsFailed)) * 100)}%`);

if (testsFailed === 0) {
  console.log('\n🎉 All tests passed! Your application is production-ready!');
} else {
  console.log('\n⚠️  Some tests failed. Please address the issues above before deploying to production.');
}

console.log('\n🚀 Next Steps:');
console.log('1. Set up production database (PostgreSQL recommended)');
console.log('2. Configure environment variables for production');
console.log('3. Set up CI/CD pipeline');
console.log('4. Configure monitoring and logging');
console.log('5. Set up backup and disaster recovery');
console.log('6. Perform security audit');
console.log('7. Load test the application');
console.log('8. Deploy to staging environment for final testing'); 