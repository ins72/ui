const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config({ path: '.env.local' });

const app = express();
const PORT = process.env.BACKEND_PORT || 8000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Logging
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Import and use API routes
const productsRouter = require('./routes/products');
const customersRouter = require('./routes/customers');
const transactionsRouter = require('./routes/transactions');
const incomeRouter = require('./routes/income');
const payoutsRouter = require('./routes/payouts');
const refundsRouter = require('./routes/refunds');
const commentsRouter = require('./routes/comments');
const messagesRouter = require('./routes/messages');
const notificationsRouter = require('./routes/notifications');
const authRouter = require('./routes/auth');

// API routes
app.use('/api/products', productsRouter);
app.use('/api/customers', customersRouter);
app.use('/api/transactions', transactionsRouter);
app.use('/api/income', incomeRouter);
app.use('/api/payouts', payoutsRouter);
app.use('/api/refunds', refundsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/auth', authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔗 Frontend URL: ${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}`);
  console.log(`🗄️  Database: ${process.env.DATABASE_URL}`);
});

module.exports = app; 