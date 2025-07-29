import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create a test user
  const user = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
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
      name: 'Test Workspace',
      description: 'A test workspace for development',
    },
  });

  console.log('✅ Created workspace:', workspace.name);

  // Update user with workspace
  await prisma.user.update({
    where: { id: user.id },
    data: { workspaceId: workspace.id },
  });

  // Create sample products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        title: 'Bento Matte 3D Illustration',
        description: 'UI Design Kit',
        image: '/images/products/1.png',
        price: 98.00,
        active: true,
        userId: user.id,
        sales: 3200,
        views: 48000,
        likes: 480,
        commentsCount: 25,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Cryper – NFT UI Design Kit',
        description: 'Illustrations',
        image: '/images/products/2.png',
        price: 98.00,
        active: true,
        userId: user.id,
        sales: 1234,
        views: 12000,
        likes: 320,
        commentsCount: 15,
      },
    }),
    prisma.product.create({
      data: {
        title: 'Fleet - travel shopping kit',
        description: '3D assets',
        image: '/images/products/3.png',
        price: 59.50,
        active: true,
        userId: user.id,
        sales: 6200,
        views: 100000,
        likes: 320,
        commentsCount: 42,
      },
    }),
  ]);

  console.log('✅ Created', products.length, 'products');

  // Create sample customers
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        name: 'Liam Thompson',
        email: 'liam@example.com',
        avatar: '/images/avatars/1.png',
        userId: user.id,
        totalSpent: 1029.48,
        purchases: 49,
        lastPurchase: new Date(),
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Noah Bennett',
        email: 'noah@example.com',
        avatar: '/images/avatars/2.png',
        userId: user.id,
        totalSpent: 3239.50,
        purchases: 5,
        lastPurchase: new Date(),
      },
    }),
    prisma.customer.create({
      data: {
        name: 'Amelia Brooks',
        email: 'amelia@example.com',
        avatar: '/images/avatars/3.png',
        userId: user.id,
        totalSpent: 755.28,
        purchases: 25,
        lastPurchase: new Date(),
      },
    }),
  ]);

  console.log('✅ Created', customers.length, 'customers');

  // Create sample transactions
  const transactions = await Promise.all([
    prisma.transaction.create({
      data: {
        amount: 98.00,
        type: 'sale',
        status: 'completed',
        userId: user.id,
        productId: products[0].id,
        customerId: customers[0].id,
      },
    }),
    prisma.transaction.create({
      data: {
        amount: 98.00,
        type: 'sale',
        status: 'completed',
        userId: user.id,
        productId: products[1].id,
        customerId: customers[1].id,
      },
    }),
    prisma.transaction.create({
      data: {
        amount: 59.50,
        type: 'sale',
        status: 'completed',
        userId: user.id,
        productId: products[2].id,
        customerId: customers[2].id,
      },
    }),
  ]);

  console.log('✅ Created', transactions.length, 'transactions');

  // Create sample notifications
  const notifications = await Promise.all([
    prisma.notification.create({
      data: {
        type: 'purchase',
        message: 'Liam Thompson purchased Bento Matte 3D Illustration',
        userId: user.id,
        productId: products[0].id,
        customerId: customers[0].id,
      },
    }),
    prisma.notification.create({
      data: {
        type: 'like',
        message: 'Noah Bennett liked Cryper – NFT UI Design Kit',
        userId: user.id,
        productId: products[1].id,
        customerId: customers[1].id,
      },
    }),
  ]);

  console.log('✅ Created', notifications.length, 'notifications');

  console.log('🎉 Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 