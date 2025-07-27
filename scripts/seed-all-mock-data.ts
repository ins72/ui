import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding all mock data...');

  // Create a test user
  const user = await prisma.user.upsert({
    where: { email: 'tmonnens@outlook.com' },
    update: {},
    create: {
      email: 'tmonnens@outlook.com',
      name: 'Thomas Monnens',
      password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4tbQJ5qKqC', // password: test123
      image: '/images/avatars/1.png',
    },
  });

  console.log('✅ Created test user:', user.email);

  // Create a workspace
  const workspace = await prisma.workspace.upsert({
    where: { id: 'workspace-1' },
    update: {},
    create: {
      id: 'workspace-1',
      name: 'Thomas Workspace',
      description: 'A workspace for Thomas Monnens',
    },
  });

  console.log('✅ Created workspace:', workspace.name);

  // Update user with workspace
  await prisma.user.update({
    where: { id: user.id },
    data: { workspaceId: workspace.id },
  });

  // Create pricing plans (from pricing.tsx)
  const pricingPlans = await Promise.all([
    prisma.pricingPlan.create({
      data: {
        title: "Free",
        percentage: 30,
        description: "revenue sharing",
        features: JSON.stringify([
          "E-commerce",
          "Social media",
          "Courses",
          "CRM",
          "Revenue sharing model",
          "Standard support",
          "MEWAYZ branding",
        ]),
        isActive: true,
        isRecommended: false,
        sortOrder: 1,
      },
    }),
    prisma.pricingPlan.create({
      data: {
        title: "Pro",
        percentage: 49,
        description: "fixed fee",
        features: JSON.stringify([
          "E-commerce",
          "Social media",
          "Courses",
          "CRM",
          "Flat fee model",
          "Premium support",
        ]),
        isActive: true,
        isRecommended: false,
        sortOrder: 2,
      },
    }),
    prisma.pricingPlan.create({
      data: {
        title: "Enterprise",
        percentage: 15,
        description: "revenue share, min $99/month",
        features: JSON.stringify([
          "Complete feature suite",
          "White-label platform",
          "Revenue sharing",
          "Account manager",
          "Custom branding",
          "Invoice billing",
          "SLA guarantees",
          "Uptime commitment",
          "Premium support",
          "Advanced analytics",
          "API access",
          "Security compliance",
        ]),
        isActive: true,
        isRecommended: true,
        sortOrder: 3,
      },
    }),
  ]);

  console.log('✅ Created', pricingPlans.length, 'pricing plans');

  // Create FAQs (from faqs.tsx)
  const faqs = await Promise.all([
    // General FAQs
    prisma.fAQ.create({
      data: {
        category: "General",
        title: "What's the difference between Free, Pro, and Enterprise plans?",
        content: "All three plans provide the same core features: E-commerce, Social media, Courses, and CRM. The difference is in pricing structure - Free uses 30% revenue share, Pro uses a flat $49/month fee, and Enterprise uses 15% revenue share with a $99/month minimum plus white-label capabilities.",
        sortOrder: 1,
        isActive: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        category: "General",
        title: "Why is the Enterprise plan 'Recommended'?",
        content: "The Enterprise plan is recommended for businesses that want white-label capabilities, custom branding, and dedicated account management. It offers the most comprehensive support and advanced features while maintaining competitive pricing.",
        sortOrder: 2,
        isActive: true,
      },
    }),
    // Pricing FAQs
    prisma.fAQ.create({
      data: {
        category: "Pricing & Fees",
        title: "What's the difference between revenue share and flat fee?",
        content: "Revenue share means we take a percentage of your earnings (30% for Free, 15% for Enterprise). Flat fee means you pay a fixed amount regardless of earnings ($49/month for Pro). Choose based on your expected revenue - flat fee is better for high earners, revenue share for lower earners.",
        sortOrder: 1,
        isActive: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        category: "Pricing & Fees",
        title: "What's the $99/month minimum for Enterprise?",
        content: "Enterprise plan charges 15% revenue share OR $99/month, whichever is higher. This ensures we can provide the premium support and white-label features while maintaining profitability.",
        sortOrder: 2,
        isActive: true,
      },
    }),
    // Features FAQs
    prisma.fAQ.create({
      data: {
        category: "Features",
        title: "Do all plans have the same features?",
        content: "Yes, all three plans include the same core features: E-commerce, Social media, Courses, and CRM. The only differences are pricing structure and Enterprise's additional white-label capabilities.",
        sortOrder: 1,
        isActive: true,
      },
    }),
    prisma.fAQ.create({
      data: {
        category: "Features",
        title: "What are the white-label features in Enterprise?",
        content: "Enterprise includes custom branding, invoice billing, API access, and the ability to remove MEWAYZ branding. You can present the platform as your own branded solution to your customers.",
        sortOrder: 2,
        isActive: true,
      },
    }),
  ]);

  console.log('✅ Created', faqs.length, 'FAQs');

  // Create shop items (from shopItems.tsx)
  const shopItems = await Promise.all([
    prisma.shopItem.create({
      data: {
        title: "Bento Matte 3D Illustration",
        description: "UI Design Kit",
        image: "/images/products/1.png",
        price: 98.00,
        category: "UI Kit",
        tags: JSON.stringify(["3D", "Illustration", "UI"]),
        isActive: true,
      },
    }),
    prisma.shopItem.create({
      data: {
        title: "Cryper – NFT UI Design Kit",
        description: "Illustrations",
        image: "/images/products/2.png",
        price: 98.00,
        category: "Illustrations",
        tags: JSON.stringify(["NFT", "UI", "Design"]),
        isActive: true,
      },
    }),
    prisma.shopItem.create({
      data: {
        title: "Fleet - travel shopping kit",
        description: "3D assets",
        image: "/images/products/3.png",
        price: 59.50,
        category: "3D Assets",
        tags: JSON.stringify(["Travel", "Shopping", "3D"]),
        isActive: true,
      },
    }),
  ]);

  console.log('✅ Created', shopItems.length, 'shop items');

  // Create income data (from income.tsx)
  const incomeData = await Promise.all([
    prisma.income.create({
      data: {
        amount: 128000.00,
        type: "revenue",
        source: "Product sales",
        date: new Date(),
        userId: user.id,
      },
    }),
    prisma.income.create({
      data: {
        amount: 25600.00,
        type: "commission",
        source: "Affiliate program",
        date: new Date(),
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Created', incomeData.length, 'income records');

  // Create active times data (from activeTimes.tsx)
  const activeTimes = await Promise.all([
    prisma.activeTime.create({
      data: {
        hour: 9,
        activity: 45,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 10,
        activity: 67,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 11,
        activity: 89,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 12,
        activity: 123,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 13,
        activity: 156,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 14,
        activity: 134,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 15,
        activity: 98,
        userId: user.id,
      },
    }),
    prisma.activeTime.create({
      data: {
        hour: 16,
        activity: 76,
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Created', activeTimes.length, 'active times records');

  // Create promote data (from promote.tsx)
  const promoteData = await Promise.all([
    prisma.promote.create({
      data: {
        title: "Product views",
        value: "106k",
        icon: "bag",
        percentage: 36.8,
        tooltip: "Maximum 100 characters. No HTML or emoji allowed",
        newCustomers: 42.6,
        productReached: 34002,
        userId: user.id,
      },
    }),
    prisma.promote.create({
      data: {
        title: "Engagement rate",
        value: "12.6%",
        icon: "chart",
        percentage: -24.5,
        tooltip: "Maximum 100 characters. No HTML or emoji allowed",
        newCustomers: -12.8,
        productReached: 9875,
        userId: user.id,
      },
    }),
    prisma.promote.create({
      data: {
        title: "Interactions",
        value: "59.9K",
        icon: "dashboard",
        percentage: 20.5,
        tooltip: "Maximum 100 characters. No HTML or emoji allowed",
        newCustomers: 27.5,
        productReached: 24156,
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Created', promoteData.length, 'promote records');

  // Create countries data (from countries.tsx)
  const countries = await Promise.all([
    prisma.country.create({
      data: {
        name: "United States",
        flag: "/images/flags/us.svg",
        percentage: 65.5,
        userId: user.id,
      },
    }),
    prisma.country.create({
      data: {
        name: "Sweden",
        flag: "/images/flags/se.svg",
        percentage: 57.5,
        userId: user.id,
      },
    }),
    prisma.country.create({
      data: {
        name: "Canada",
        flag: "/images/flags/ca.svg",
        percentage: 45.2,
        userId: user.id,
      },
    }),
    prisma.country.create({
      data: {
        name: "UK",
        flag: "/images/flags/uk.svg",
        percentage: 33.2,
        userId: user.id,
      },
    }),
    prisma.country.create({
      data: {
        name: "Germany",
        flag: "/images/flags/de.svg",
        percentage: 25.8,
        userId: user.id,
      },
    }),
  ]);

  console.log('✅ Created', countries.length, 'countries');

  // Create creators data (from creators.tsx)
  const creators = await Promise.all([
    prisma.creator.create({
      data: {
        login: "maximus",
        details: "Dream Big. Think Different. Do Great!",
        avatar: "/images/avatar.png",
        isOnline: true,
        label: "Top #1 creator",
        tags: JSON.stringify(["Mobile App", "3D Illustrations", "UI Design Kit", "Fonts"]),
        time: "20 mins",
        rating: 4.97,
        items: 128,
      },
    }),
    prisma.creator.create({
      data: {
        login: "designer_pro",
        details: "Creating amazing digital experiences",
        avatar: "/images/avatars/2.png",
        isOnline: false,
        label: "Featured creator",
        tags: JSON.stringify(["UI Design", "Web Design", "Branding"]),
        time: "2h ago",
        rating: 4.85,
        items: 95,
      },
    }),
  ]);

  console.log('✅ Created', creators.length, 'creators');

  console.log('🎉 All mock data seeded successfully!');
  console.log('');
  console.log('📊 Summary:');
  console.log(`   - User: ${user.email}`);
  console.log(`   - Pricing Plans: ${pricingPlans.length}`);
  console.log(`   - FAQs: ${faqs.length}`);
  console.log(`   - Shop Items: ${shopItems.length}`);
  console.log(`   - Income Records: ${incomeData.length}`);
  console.log(`   - Active Times: ${activeTimes.length}`);
  console.log(`   - Promote Data: ${promoteData.length}`);
  console.log(`   - Countries: ${countries.length}`);
  console.log(`   - Creators: ${creators.length}`);
  console.log('');
  console.log('🔑 Login credentials:');
  console.log(`   Email: ${user.email}`);
  console.log(`   Password: test123`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 