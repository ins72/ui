#!/usr/bin/env tsx

import { prisma } from '../lib/prisma';

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create a test user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      image: '/images/avatar.png',
    },
  });

  console.log('✅ User created:', user.email);

  // Create products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        title: 'Premium Design Template',
        description: 'Professional design template for modern websites',
        price: 99.99,
        image: '/images/products/1.png',
        category: 'Design',
        status: 'released',
        userId: user.id,
        sales: 45,
        views: 1200,
        likes: 89,
        commentsCount: 12,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Marketing Strategy Guide',
        description: 'Complete guide to digital marketing strategies',
        price: 149.99,
        image: '/images/products/2.png',
        category: 'Marketing',
        status: 'released',
        userId: user.id,
        sales: 32,
        views: 890,
        likes: 67,
        commentsCount: 8,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Business Analytics Tool',
        description: 'Advanced analytics tool for business insights',
        price: 199.99,
        image: '/images/products/3.png',
        category: 'Analytics',
        status: 'released',
        userId: user.id,
        sales: 28,
        views: 650,
        likes: 45,
        commentsCount: 6,
      },
    }),
  ]);

  console.log('✅ Products created:', products.length);

  // Create customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '/images/avatars/1.png',
        userId: user.id,
        totalSpent: 299.97,
        purchases: 3,
        lastPurchase: new Date(),
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        avatar: '/images/avatars/2.png',
        userId: user.id,
        totalSpent: 149.99,
        purchases: 1,
        lastPurchase: new Date(),
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Mike Johnson',
        email: 'mike@example.com',
        avatar: '/images/avatars/3.png',
        userId: user.id,
        totalSpent: 449.97,
        purchases: 3,
        lastPurchase: new Date(),
      },
    }),
  ]);

  console.log('✅ Customers created:', customers.length);

  // Create transactions
  const transactions = await Promise.all([
    prisma.transaction.create({
      data: {
        amount: 99.99,
        type: 'sale',
        status: 'completed',
        userId: user.id,
        productId: products[0].id,
        customerId: customers[0].id,
      },
    }),
    prisma.transaction.create({
      data: {
        amount: 149.99,
        type: 'sale',
        status: 'completed',
        userId: user.id,
        productId: products[1].id,
        customerId: customers[1].id,
      },
    }),
    prisma.transaction.create({
      data: {
        amount: 199.99,
        type: 'sale',
        status: 'completed',
        userId: user.id,
        productId: products[2].id,
        customerId: customers[2].id,
      },
    }),
  ]);

  console.log('✅ Transactions created:', transactions.length);

  // Create comments
  const comments = await Promise.all([
    prisma.comment.create({
      data: {
        content: 'Great template! Exactly what I was looking for.',
        userId: user.id,
        productId: products[0].id,
        customerId: customers[0].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Very helpful guide, highly recommended!',
        userId: user.id,
        productId: products[1].id,
        customerId: customers[1].id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Excellent analytics tool, worth every penny.',
        userId: user.id,
        productId: products[2].id,
        customerId: customers[2].id,
      },
    }),
  ]);

  console.log('✅ Comments created:', comments.length);

  // Create messages
  const messages = await Promise.all([
    prisma.message.create({
      data: {
        content: 'Hi, I have a question about your product.',
        userId: user.id,
        customerId: customers[0].id,
      },
    }),
    prisma.message.create({
      data: {
        content: 'Thanks for the quick response!',
        userId: user.id,
        customerId: customers[1].id,
        read: true,
      },
    }),
    prisma.message.create({
      data: {
        content: 'Can you help me with the setup?',
        userId: user.id,
        customerId: customers[2].id,
      },
    }),
  ]);

  console.log('✅ Messages created:', messages.length);

  // Create notifications
  const notifications = await Promise.all([
    prisma.notification.create({
      data: {
        type: 'purchase',
        message: 'New sale: Premium Design Template',
        userId: user.id,
        productId: products[0].id,
        customerId: customers[0].id,
      },
    }),
    prisma.notification.create({
      data: {
        type: 'comment',
        message: 'New comment on Marketing Strategy Guide',
        userId: user.id,
        productId: products[1].id,
        customerId: customers[1].id,
      },
    }),
    prisma.notification.create({
      data: {
        type: 'like',
        message: 'Someone liked your Business Analytics Tool',
        userId: user.id,
        productId: products[2].id,
      },
    }),
  ]);

  console.log('✅ Notifications created:', notifications.length);

  // Create income records
  const income = await Promise.all([
    prisma.income.create({
      data: {
        amount: 99.99,
        type: 'revenue',
        source: 'Premium Design Template',
        date: new Date(),
        userId: user.id,
      },
    }),
    prisma.income.create({
      data: {
        amount: 149.99,
        type: 'revenue',
        source: 'Marketing Strategy Guide',
        date: new Date(),
        userId: user.id,
      },
    }),
    prisma.income.create({
      data: {
        amount: 199.99,
        type: 'revenue',
        source: 'Business Analytics Tool',
        date: new Date(),
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Income records created:', income.length);

  // Create countries
  const countries = await Promise.all([
    prisma.country.create({
      data: {
        name: 'United States',
        flag: '/images/flags/us.svg',
        percentage: 45.5,
        userId: user.id,
      },
    }),
    prisma.country.create({
      data: {
        name: 'United Kingdom',
        flag: '/images/flags/uk.svg',
        percentage: 23.2,
        userId: user.id,
      },
    }),
    prisma.country.create({
      data: {
        name: 'Germany',
        flag: '/images/flags/de.svg',
        percentage: 15.8,
        userId: user.id,
      },
    }),
    prisma.country.create({
      data: {
        name: 'France',
        flag: '/images/flags/fr.svg',
        percentage: 8.7,
        userId: user.id,
      },
    }),
    prisma.country.create({
      data: {
        name: 'Canada',
        flag: '/images/flags/ca.svg',
        percentage: 6.8,
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Countries created:', countries.length);

  // Create shop items
  const shopItems = await Promise.all([
    prisma.shopItem.create({
      data: {
        title: 'Premium Design Template',
        description: 'Professional design template',
        price: 99.99,
        image: '/images/products/1.png',
        category: 'Design',
        isActive: true,
      },
    }),
    prisma.shopItem.create({
      data: {
        title: 'Marketing Strategy Guide',
        description: 'Complete marketing guide',
        price: 149.99,
        image: '/images/products/2.png',
        category: 'Marketing',
        isActive: true,
      },
    }),
    prisma.shopItem.create({
      data: {
        title: 'Business Analytics Tool',
        description: 'Advanced analytics tool',
        price: 199.99,
        image: '/images/products/3.png',
        category: 'Analytics',
        isActive: true,
      },
    }),
  ]);

  console.log('✅ Shop items created:', shopItems.length);

  // Create chart data
  const chartData = await Promise.all([
    // Balance chart data
    prisma.chartData.create({
      data: {
        name: 'Jan',
        value: 4000,
        type: 'balance',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Feb',
        value: 3000,
        type: 'balance',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Mar',
        value: 2000,
        type: 'balance',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Apr',
        value: 2780,
        type: 'balance',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'May',
        value: 1890,
        type: 'balance',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Jun',
        value: 2390,
        type: 'balance',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Jul',
        value: 3490,
        type: 'balance',
        userId: user.id,
      },
    }),
    // Product view chart data
    prisma.chartData.create({
      data: {
        name: 'Mon',
        value: 2400,
        type: 'productView',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Tue',
        value: 1398,
        type: 'productView',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Wed',
        value: 9800,
        type: 'productView',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Thu',
        value: 3908,
        type: 'productView',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Fri',
        value: 4800,
        type: 'productView',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Sat',
        value: 3800,
        type: 'productView',
        userId: user.id,
      },
    }),
    prisma.chartData.create({
      data: {
        name: 'Sun',
        value: 4300,
        type: 'productView',
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Chart data created:', chartData.length);

  // Create active times
  const activeTimes = await Promise.all([
    prisma.activeTime.create({
      data: {
        hour: 0,
        activity: 15,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 4,
        activity: 8,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 8,
        activity: 45,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 12,
        activity: 78,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 16,
        activity: 92,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 20,
        activity: 65,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 24,
        activity: 25,
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Active times created:', activeTimes.length);

  // Create promotes
  const promotes = await Promise.all([
    prisma.promote.create({
      data: {
        title: 'Social Media Campaign',
        value: '2,847',
        icon: 'chart',
        percentage: 12.5,
        tooltip: 'Total social media reach',
        newCustomers: 156,
        productReached: 2847,
        userId: user.id,
      },
    }),
    prisma.promote.create({
      data: {
        title: 'Email Marketing',
        value: '1,234',
        icon: 'chart',
        percentage: 8.2,
        tooltip: 'Email campaign performance',
        newCustomers: 89,
        productReached: 1234,
        userId: user.id,
      },
    }),
    prisma.promote.create({
      data: {
        title: 'Content Marketing',
        value: '3,456',
        icon: 'chart',
        percentage: 15.3,
        tooltip: 'Content marketing reach',
        newCustomers: 234,
        productReached: 3456,
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Promotes created:', promotes.length);

  // Create payouts
  const payouts = await Promise.all([
    prisma.payout.create({
      data: {
        amount: 500.00,
        status: 'completed',
        method: 'bank',
        userId: user.id,
        processedAt: new Date(),
      },
    }),
    prisma.payout.create({
      data: {
        amount: 750.00,
        status: 'pending',
        method: 'paypal',
        userId: user.id,
      },
    }),
    prisma.payout.create({
      data: {
        amount: 300.00,
        status: 'completed',
        method: 'stripe',
        userId: user.id,
        processedAt: new Date(),
      },
    }),
  ]);

  console.log('✅ Payouts created:', payouts.length);

  // Create refunds
  const refunds = await Promise.all([
    prisma.refund.create({
      data: {
        amount: 99.99,
        reason: 'Customer requested refund',
        status: 'completed',
        userId: user.id,
        productId: products[0].id,
        customerId: customers[0].id,
        processedAt: new Date(),
      },
    }),
    prisma.refund.create({
      data: {
        amount: 149.99,
        reason: 'Product not as described',
        status: 'pending',
        userId: user.id,
        productId: products[1].id,
        customerId: customers[1].id,
      },
    }),
  ]);

  console.log('✅ Refunds created:', refunds.length);

  // Create statements
  const statements = await Promise.all([
    prisma.statement.create({
      data: {
        period: 'monthly',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-31'),
        totalEarnings: 449.97,
        totalSales: 3,
        totalCustomers: 3,
        totalProducts: 3,
        userId: user.id,
      },
    }),
    prisma.statement.create({
      data: {
        period: 'monthly',
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-02-29'),
        totalEarnings: 599.96,
        totalSales: 4,
        totalCustomers: 4,
        totalProducts: 4,
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Statements created:', statements.length);

  // Create affiliate data
  const affiliateData = await prisma.affiliateData.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      affiliateCode: 'TEST123',
      commissionRate: 0.1,
      totalEarnings: 150.00,
      totalReferrals: 15,
      activeReferrals: 12,
      userId: user.id,
    },
  });

  console.log('✅ Affiliate data created');

  // Create creators
  const creators = await Promise.all([
    prisma.creator.create({
      data: {
        login: 'designer_pro',
        details: 'Professional designer with 10+ years experience',
        avatar: '/images/creators/1.png',
        isOnline: true,
        label: 'Design Expert',
        tags: JSON.stringify(['design', 'ui', 'ux']),
        time: '2 hours ago',
        rating: 4.8,
        items: 25,
      },
    }),
    prisma.creator.create({
      data: {
        login: 'marketing_guru',
        details: 'Digital marketing specialist',
        avatar: '/images/creators/2.png',
        isOnline: false,
        label: 'Marketing Expert',
        tags: JSON.stringify(['marketing', 'seo', 'social']),
        time: '1 day ago',
        rating: 4.6,
        items: 18,
      },
    }),
    prisma.creator.create({
      data: {
        login: 'analytics_master',
        details: 'Data analytics and business intelligence expert',
        avatar: '/images/creators/3.png',
        isOnline: true,
        label: 'Analytics Expert',
        tags: JSON.stringify(['analytics', 'data', 'bi']),
        time: '30 min ago',
        rating: 4.9,
        items: 32,
      },
    }),
  ]);

  console.log('✅ Creators created:', creators.length);

  // Create pricing plans
  const pricingPlans = await Promise.all([
    prisma.pricingPlan.create({
      data: {
        title: 'Basic',
        percentage: null,
        description: 'Perfect for getting started',
        features: JSON.stringify(['Up to 10 products', 'Basic analytics', 'Email support']),
        isActive: true,
        isRecommended: false,
        sortOrder: 1,
      },
    }),
    prisma.pricingPlan.create({
      data: {
        title: 'Pro',
        percentage: 20,
        description: 'Most popular choice',
        features: JSON.stringify(['Unlimited products', 'Advanced analytics', 'Priority support', 'Custom domain']),
        isActive: true,
        isRecommended: true,
        sortOrder: 2,
      },
    }),
    prisma.pricingPlan.create({
      data: {
        title: 'Enterprise',
        percentage: null,
        description: 'For large businesses',
        features: JSON.stringify(['Everything in Pro', 'White-label solution', 'Dedicated support', 'API access']),
        isActive: true,
        isRecommended: false,
        sortOrder: 3,
      },
    }),
  ]);

  console.log('✅ Pricing plans created:', pricingPlans.length);

  // Create FAQs
  const faqs = await Promise.all([
    prisma.fAQ.create({
      data: {
        category: 'General',
        title: 'How do I get started?',
        content: 'Simply sign up for an account and follow our onboarding guide to get started with your first product.',
        sortOrder: 1,
        isActive: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        category: 'Billing',
        title: 'What payment methods do you accept?',
        content: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
        sortOrder: 2,
        isActive: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        category: 'Support',
        title: 'How can I contact support?',
        content: 'You can reach our support team via email, live chat, or by submitting a ticket through your dashboard.',
        sortOrder: 3,
        isActive: true,
      },
    }),
  ]);

  console.log('✅ FAQs created:', faqs.length);

  console.log('🎉 Database seeding completed successfully!');
  console.log(`📊 Created ${products.length} products, ${customers.length} customers, ${transactions.length} transactions`);
  console.log(`📈 Total records created: ${products.length + customers.length + transactions.length + comments.length + messages.length + notifications.length + income.length + countries.length + shopItems.length + chartData.length + activeTimes.length + promotes.length + payouts.length + refunds.length + statements.length + creators.length + pricingPlans.length + faqs.length}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 