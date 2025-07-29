const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seedDatabase() {
  console.log('🌱 Starting simple database seeding...');

  try {
    // Create a test user
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    // Check if user already exists
    let user = await prisma.user.findUnique({
      where: { email: 'admin@core2.com' }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: 'admin@core2.com',
          name: 'Admin User',
          password: hashedPassword,
          image: '/images/avatars/avatar-1.png'
        }
      });
      console.log('✅ User created:', user.email);
    } else {
      console.log('✅ User already exists:', user.email);
    }

    // Create sample products
    const products = await Promise.all([
      prisma.product.create({
        data: {
          title: 'Premium Widget',
          description: 'High-quality widget for professional use',
          price: 99.99,
          image: '/images/products/product-1.png',
          category: 'Electronics',
          status: 'released',
          userId: user.id,
          sales: 45,
          views: 1200,
          likes: 89,
          commentsCount: 12
        }
      }),
      prisma.product.create({
        data: {
          title: 'Design Template Pack',
          description: 'Complete design template collection',
          price: 49.99,
          image: '/images/products/product-2.png',
          category: 'Design',
          status: 'released',
          userId: user.id,
          sales: 23,
          views: 800,
          likes: 56,
          commentsCount: 8
        }
      }),
      prisma.product.create({
        data: {
          title: 'Marketing Course',
          description: 'Comprehensive digital marketing course',
          price: 199.99,
          image: '/images/products/product-3.png',
          category: 'Education',
          status: 'released',
          userId: user.id,
          sales: 67,
          views: 2100,
          likes: 134,
          commentsCount: 25
        }
      })
    ]);

    console.log('✅ Products created:', products.length);

    // Create sample customers
    const customers = await Promise.all([
      prisma.customer.create({
        data: {
          name: 'John Smith',
          email: 'john@example.com',
          avatar: '/images/avatars/avatar-2.png',
          userId: user.id,
          totalSpent: 299.97,
          purchases: 3,
          lastPurchase: new Date()
        }
      }),
      prisma.customer.create({
        data: {
          name: 'Sarah Johnson',
          email: 'sarah@example.com',
          avatar: '/images/avatars/avatar-3.png',
          userId: user.id,
          totalSpent: 149.98,
          purchases: 2,
          lastPurchase: new Date(Date.now() - 86400000) // 1 day ago
        }
      }),
      prisma.customer.create({
        data: {
          name: 'Mike Wilson',
          email: 'mike@example.com',
          avatar: '/images/avatars/avatar-4.png',
          userId: user.id,
          totalSpent: 99.99,
          purchases: 1,
          lastPurchase: new Date(Date.now() - 172800000) // 2 days ago
        }
      })
    ]);

    console.log('✅ Customers created:', customers.length);

    // Create sample income records
    const incomeRecords = await Promise.all([
      prisma.income.create({
        data: {
          amount: 99.99,
          type: 'revenue',
          source: 'Premium Widget',
          date: new Date(),
          userId: user.id
        }
      }),
      prisma.income.create({
        data: {
          amount: 49.99,
          type: 'revenue',
          source: 'Design Template Pack',
          date: new Date(Date.now() - 86400000),
          userId: user.id
        }
      }),
      prisma.income.create({
        data: {
          amount: 199.99,
          type: 'revenue',
          source: 'Marketing Course',
          date: new Date(Date.now() - 172800000),
          userId: user.id
        }
      })
    ]);

    console.log('✅ Income records created:', incomeRecords.length);

    // Create sample chart data
    const chartData = await Promise.all([
      prisma.chartData.create({
        data: {
          name: 'Sales',
          value: 349.97,
          type: 'sales',
          userId: user.id
        }
      }),
      prisma.chartData.create({
        data: {
          name: 'Views',
          value: 4100,
          type: 'productView',
          userId: user.id
        }
      }),
      prisma.chartData.create({
        data: {
          name: 'Balance',
          value: 349.97,
          type: 'balance',
          userId: user.id
        }
      })
    ]);

    console.log('✅ Chart data created:', chartData.length);

    // Create sample countries data
    const countries = await Promise.all([
      prisma.country.create({
        data: {
          name: 'United States',
          flag: '/images/flags/us.svg',
          percentage: 45.5,
          userId: user.id
        }
      }),
      prisma.country.create({
        data: {
          name: 'United Kingdom',
          flag: '/images/flags/uk.svg',
          percentage: 23.2,
          userId: user.id
        }
      }),
      prisma.country.create({
        data: {
          name: 'Canada',
          flag: '/images/flags/ca.svg',
          percentage: 18.7,
          userId: user.id
        }
      }),
      prisma.country.create({
        data: {
          name: 'Australia',
          flag: '/images/flags/au.svg',
          percentage: 12.6,
          userId: user.id
        }
      })
    ]);

    console.log('✅ Countries data created:', countries.length);

    // Create sample promote data
    const promotes = await Promise.all([
      prisma.promote.create({
        data: {
          title: 'Social Media',
          value: 'Facebook',
          icon: 'facebook',
          percentage: 45.2,
          tooltip: 'Facebook marketing campaigns',
          newCustomers: 23,
          productReached: 1200,
          userId: user.id
        }
      }),
      prisma.promote.create({
        data: {
          title: 'Email Marketing',
          value: 'Newsletter',
          icon: 'mail',
          percentage: 32.1,
          tooltip: 'Email newsletter campaigns',
          newCustomers: 18,
          productReached: 800,
          userId: user.id
        }
      }),
      prisma.promote.create({
        data: {
          title: 'SEO',
          value: 'Organic',
          icon: 'search',
          percentage: 22.7,
          tooltip: 'Search engine optimization',
          newCustomers: 12,
          productReached: 600,
          userId: user.id
        }
      })
    ]);

    console.log('✅ Promote data created:', promotes.length);

    console.log('');
    console.log('🎉 Simple database seeding completed successfully!');
    console.log('');
    console.log('📊 Summary:');
    console.log(`   👤 Users: 1`);
    console.log(`   📦 Products: ${products.length}`);
    console.log(`   👥 Customers: ${customers.length}`);
    console.log(`   📈 Income Records: ${incomeRecords.length}`);
    console.log(`   📊 Chart Data: ${chartData.length}`);
    console.log(`   🌍 Countries: ${countries.length}`);
    console.log(`   📢 Promotes: ${promotes.length}`);
    console.log('');
    console.log('🔑 Test Login:');
    console.log('   Email: admin@core2.com');
    console.log('   Password: password123');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeding
if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log('✅ Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error);
      process.exit(1);
    });
}

module.exports = { seedDatabase }; 