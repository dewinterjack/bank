var Transaction = require("./transaction");

function Statement(currentBalance){
  this.currentBalance = currentBalance;
  this.transactions = [];
}

Statement.prototype.recordTransaction = function(previousBalance, newBalance){
  this.transactions.push(new Transaction(previousBalance, newBalance));
};

module.exports = Statement;