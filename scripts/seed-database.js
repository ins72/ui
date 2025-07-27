const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seedDatabase() {
  console.log('🌱 Starting database seeding...');

  try {
    // Create a test user
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const user = await prisma.user.upsert({
      where: { email: 'admin@core2.com' },
      update: {},
      create: {
        email: 'admin@core2.com',
        name: 'Admin User',
        password: hashedPassword,
        image: '/images/avatars/avatar-1.png'
      }
    });

    console.log('✅ User created:', user.email);

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

    // Create sample transactions
    const transactions = await Promise.all([
      prisma.transaction.create({
        data: {
          amount: 99.99,
          type: 'sale',
          status: 'completed',
          userId: user.id,
          productId: products[0].id,
          customerId: customers[0].id
        }
      }),
      prisma.transaction.create({
        data: {
          amount: 49.99,
          type: 'sale',
          status: 'completed',
          userId: user.id,
          productId: products[1].id,
          customerId: customers[1].id
        }
      }),
      prisma.transaction.create({
        data: {
          amount: 199.99,
          type: 'sale',
          status: 'completed',
          userId: user.id,
          productId: products[2].id,
          customerId: customers[2].id
        }
      })
    ]);

    console.log('✅ Transactions created:', transactions.length);

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

    // Create sample active times
    const activeTimes = [];
    for (let hour = 0; hour < 24; hour++) {
      const activity = Math.floor(Math.random() * 100) + 10;
      activeTimes.push(
        prisma.activeTime.create({
          data: {
            hour: hour,
            activity: activity,
            userId: user.id
          }
        })
      );
    }
    await Promise.all(activeTimes);
    console.log('✅ Active times data created: 24 records');

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

    // Create sample shop items
    const shopItems = await Promise.all([
      prisma.shopItem.create({
        data: {
          title: 'Basic Plan',
          description: 'Perfect for small businesses',
          price: 29.99,
          image: '/images/products/shop-1.png',
          category: 'Subscription',
          isActive: true
        }
      }),
      prisma.shopItem.create({
        data: {
          title: 'Pro Plan',
          description: 'Advanced features for growing businesses',
          price: 79.99,
          image: '/images/products/shop-2.png',
          category: 'Subscription',
          isActive: true
        }
      }),
      prisma.shopItem.create({
        data: {
          title: 'Enterprise Plan',
          description: 'Complete solution for large organizations',
          price: 199.99,
          image: '/images/products/shop-3.png',
          category: 'Subscription',
          isActive: true
        }
      })
    ]);

    console.log('✅ Shop items created:', shopItems.length);

    // Create sample creators
    const creators = await Promise.all([
      prisma.creator.create({
        data: {
          login: 'johndoe',
          details: 'Professional designer with 10+ years experience',
          avatar: '/images/creators/creator-1.png',
          isOnline: true,
          label: 'Design Expert',
          tags: 'UI/UX, Web Design, Branding',
          time: '2 hours ago',
          rating: 4.8,
          items: 15
        }
      }),
      prisma.creator.create({
        data: {
          login: 'sarahdev',
          details: 'Full-stack developer specializing in React and Node.js',
          avatar: '/images/creators/creator-2.png',
          isOnline: false,
          label: 'Tech Lead',
          tags: 'React, Node.js, TypeScript',
          time: '1 day ago',
          rating: 4.9,
          items: 23
        }
      }),
      prisma.creator.create({
        data: {
          login: 'mikemarketing',
          details: 'Digital marketing strategist and content creator',
          avatar: '/images/creators/creator-3.png',
          isOnline: true,
          label: 'Marketing Guru',
          tags: 'SEO, Content, Social Media',
          time: '30 minutes ago',
          rating: 4.7,
          items: 8
        }
      })
    ]);

    console.log('✅ Creators created:', creators.length);

    // Create sample pricing plans
    const pricingPlans = await Promise.all([
      prisma.pricingPlan.create({
        data: {
          title: 'Starter',
          percentage: 5,
          description: 'Perfect for beginners',
          features: 'Basic features, 5GB storage, Email support',
          isActive: true,
          isRecommended: false,
          sortOrder: 1
        }
      }),
      prisma.pricingPlan.create({
        data: {
          title: 'Professional',
          percentage: 10,
          description: 'Best for growing businesses',
          features: 'Advanced features, 50GB storage, Priority support',
          isActive: true,
          isRecommended: true,
          sortOrder: 2
        }
      }),
      prisma.pricingPlan.create({
        data: {
          title: 'Enterprise',
          percentage: 15,
          description: 'For large organizations',
          features: 'All features, Unlimited storage, 24/7 support',
          isActive: true,
          isRecommended: false,
          sortOrder: 3
        }
      })
    ]);

    console.log('✅ Pricing plans created:', pricingPlans.length);

    // Create sample FAQs
    const faqs = await Promise.all([
      prisma.fAQ.create({
        data: {
          category: 'General',
          title: 'How do I get started?',
          content: 'Simply sign up for an account and follow our onboarding process to get started with Core2 Dashboard.',
          sortOrder: 1,
          isActive: true
        }
      }),
      prisma.fAQ.create({
        data: {
          category: 'Billing',
          title: 'What payment methods do you accept?',
          content: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
          sortOrder: 2,
          isActive: true
        }
      }),
      prisma.fAQ.create({
        data: {
          category: 'Support',
          title: 'How can I contact support?',
          content: 'You can reach our support team via email at support@core2.com or through our live chat feature.',
          sortOrder: 3,
          isActive: true
        }
      })
    ]);

    console.log('✅ FAQs created:', faqs.length);

    // Create affiliate data for the user
    const affiliateData = await prisma.affiliateData.create({
      data: {
        affiliateCode: 'ADMIN2024',
        commissionRate: 10.0,
        totalEarnings: 349.97,
        totalReferrals: 6,
        activeReferrals: 4,
        userId: user.id
      }
    });

    console.log('✅ Affiliate data created for user');

    console.log('');
    console.log('🎉 Database seeding completed successfully!');
    console.log('');
    console.log('📊 Summary:');
    console.log(`   👤 Users: 1`);
    console.log(`   📦 Products: ${products.length}`);
    console.log(`   👥 Customers: ${customers.length}`);
    console.log(`   💰 Transactions: ${transactions.length}`);
    console.log(`   📈 Income Records: ${incomeRecords.length}`);
    console.log(`   📊 Chart Data: ${chartData.length}`);
    console.log(`   🌍 Countries: ${countries.length}`);
    console.log(`   ⏰ Active Times: 24`);
    console.log(`   📢 Promotes: ${promotes.length}`);
    console.log(`   🛍️  Shop Items: ${shopItems.length}`);
    console.log(`   👨‍💻 Creators: ${creators.length}`);
    console.log(`   💳 Pricing Plans: ${pricingPlans.length}`);
    console.log(`   ❓ FAQs: ${faqs.length}`);
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