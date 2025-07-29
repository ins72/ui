const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Payouts API - Coming soon' });
});

module.exports = router; 