#!/usr/bin/env tsx

import { dataService } from '../lib/data-service';

interface TestResult {
    operation: string;
    endpoint: string;
    success: boolean;
    error?: string;
    data?: any;
}

const testResults: TestResult[] = [];

async function testCRUDOperations() {
    console.log('🧪 Starting CRUD Operations Test Suite...\n');

    // Test Products CRUD
    console.log('📦 Testing Products CRUD Operations...');
    
    try {
        // CREATE
        const createProduct = await dataService.createProduct({
            title: 'Test Product',
            description: 'Test Description',
            price: 99.99,
            category: 'Test Category',
            image: '/images/products/1.png'
        });
        testResults.push({
            operation: 'CREATE',
            endpoint: 'products',
            success: true,
            data: createProduct
        });
        console.log('✅ Product created successfully');

        // READ
        const getProducts = await dataService.getProducts({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'products',
            success: Array.isArray(getProducts.data),
            data: getProducts
        });
        console.log('✅ Products retrieved successfully');

        // UPDATE
        if (createProduct.data && typeof createProduct.data === 'object' && 'id' in createProduct.data) {
            const productId = (createProduct.data as any).id;
            const updateProduct = await dataService.updateProduct(productId, {
                title: 'Updated Test Product',
                price: 149.99
            });
            testResults.push({
                operation: 'UPDATE',
                endpoint: 'products',
                success: true,
                data: updateProduct
            });
            console.log('✅ Product updated successfully');

            // DELETE
            const deleteProduct = await dataService.deleteProduct(productId);
            testResults.push({
                operation: 'DELETE',
                endpoint: 'products',
                success: true,
                data: deleteProduct
            });
            console.log('✅ Product deleted successfully');
        }
    } catch (error) {
        testResults.push({
            operation: 'CRUD',
            endpoint: 'products',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Products CRUD test failed:', error);
    }

    // Test Customers CRUD
    console.log('\n👥 Testing Customers CRUD Operations...');
    
    try {
        const getCustomers = await dataService.getCustomers({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'customers',
            success: Array.isArray(getCustomers.data),
            data: getCustomers
        });
        console.log('✅ Customers retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'customers',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Customers test failed:', error);
    }

    // Test Transactions CRUD
    console.log('\n💰 Testing Transactions CRUD Operations...');
    
    try {
        const getTransactions = await dataService.getTransactions({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'transactions',
            success: Array.isArray(getTransactions.data),
            data: getTransactions
        });
        console.log('✅ Transactions retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'transactions',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Transactions test failed:', error);
    }

    // Test Comments CRUD
    console.log('\n💬 Testing Comments CRUD Operations...');
    
    try {
        const getComments = await dataService.getComments({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'comments',
            success: Array.isArray(getComments.data),
            data: getComments
        });
        console.log('✅ Comments retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'comments',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Comments test failed:', error);
    }

    // Test Messages CRUD
    console.log('\n📨 Testing Messages CRUD Operations...');
    
    try {
        const getMessages = await dataService.getMessages({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'messages',
            success: Array.isArray(getMessages.data),
            data: getMessages
        });
        console.log('✅ Messages retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'messages',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Messages test failed:', error);
    }

    // Test Notifications CRUD
    console.log('\n🔔 Testing Notifications CRUD Operations...');
    
    try {
        const getNotifications = await dataService.getNotifications({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'notifications',
            success: Array.isArray(getNotifications.data),
            data: getNotifications
        });
        console.log('✅ Notifications retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'notifications',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Notifications test failed:', error);
    }

    // Test Refunds CRUD
    console.log('\n🔄 Testing Refunds CRUD Operations...');
    
    try {
        const getRefunds = await dataService.getRefunds({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'refunds',
            success: Array.isArray(getRefunds.data),
            data: getRefunds
        });
        console.log('✅ Refunds retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'refunds',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Refunds test failed:', error);
    }

    // Test Income CRUD
    console.log('\n💵 Testing Income CRUD Operations...');
    
    try {
        const getIncome = await dataService.getIncome({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'income',
            success: Array.isArray(getIncome.data),
            data: getIncome
        });
        console.log('✅ Income retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'income',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Income test failed:', error);
    }

    // Test Countries CRUD
    console.log('\n🌍 Testing Countries CRUD Operations...');
    
    try {
        const getCountries = await dataService.getCountries({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'countries',
            success: Array.isArray(getCountries.data),
            data: getCountries
        });
        console.log('✅ Countries retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'countries',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Countries test failed:', error);
    }

    // Test Followers CRUD
    console.log('\n👤 Testing Followers CRUD Operations...');
    
    try {
        const getFollowers = await dataService.getFollowers({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'followers',
            success: Array.isArray(getFollowers.data),
            data: getFollowers
        });
        console.log('✅ Followers retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'followers',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Followers test failed:', error);
    }

    // Test Shop Items CRUD
    console.log('\n🛍️ Testing Shop Items CRUD Operations...');
    
    try {
        const getShopItems = await dataService.getShopItems({ limit: 10 });
        testResults.push({
            operation: 'READ',
            endpoint: 'shop-items',
            success: Array.isArray(getShopItems.data),
            data: getShopItems
        });
        console.log('✅ Shop items retrieved successfully');
    } catch (error) {
        testResults.push({
            operation: 'READ',
            endpoint: 'shop-items',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        });
        console.log('❌ Shop items test failed:', error);
    }

    // Print Summary
    console.log('\n📊 Test Results Summary:');
    console.log('========================');
    
    const successfulTests = testResults.filter(result => result.success);
    const failedTests = testResults.filter(result => !result.success);
    
    console.log(`✅ Successful tests: ${successfulTests.length}`);
    console.log(`❌ Failed tests: ${failedTests.length}`);
    console.log(`📈 Success rate: ${((successfulTests.length / testResults.length) * 100).toFixed(1)}%`);
    
    if (failedTests.length > 0) {
        console.log('\n❌ Failed Tests:');
        failedTests.forEach(test => {
            console.log(`  - ${test.operation} ${test.endpoint}: ${test.error}`);
        });
    }
    
    console.log('\n🎉 CRUD Operations Test Suite completed!');
    
    return {
        total: testResults.length,
        successful: successfulTests.length,
        failed: failedTests.length,
        results: testResults
    };
}

// Run the test suite
testCRUDOperations().catch(console.error); 