const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    }); 
  } catch (err) {
      return res.send(500).json({
          success: false,
            error:'Server Error'
      })
  }
};
exports.addTransaction = (req, res, next) => {
  const {text, amount} = req.body

  const transaction = await Transaction.create(req.body)
};
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transaction');
};
