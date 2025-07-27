const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('🔍 Checking database contents...\n');
    
    const products = await prisma.product.findMany();
    console.log(`📦 Products: ${products.length}`);
    products.forEach(p => console.log(`  - ${p.title} (userId: ${p.userId})`));
    
    const users = await prisma.user.findMany();
    console.log(`\n👥 Users: ${users.length}`);
    users.forEach(u => console.log(`  - ${u.email} (id: ${u.id})`));
    
    const customers = await prisma.customer.findMany();
    console.log(`\n👤 Customers: ${customers.length}`);
    
    const transactions = await prisma.transaction.findMany();
    console.log(`\n💰 Transactions: ${transactions.length}`);
    
    // Test API query
    console.log('\n🔍 Testing API query with test-user-id...');
    const testProducts = await prisma.product.findMany({
      where: { userId: 'test-user-id' }
    });
    console.log(`Products with test-user-id: ${testProducts.length}`);
    
    // Test without user filter
    console.log('\n🔍 Testing without user filter...');
    const allProducts = await prisma.product.findMany();
    console.log(`All products: ${allProducts.length}`);
    
  } catch (error) {
    console.error('❌ Error checking database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase(); 