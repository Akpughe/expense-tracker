const express = require('express');
const router = express.Router();
const Transactions = require('../controllers/transactionsController');

router.get('/', Transactions.getTransactions);

router.post('/', Transactions.addTransaction);

router.delete('/:id', Transactions.deleteTransaction);

module.exports = router;
