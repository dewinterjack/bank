var Transaction = require("./transaction");

module.exports = function(){

  var balance = 0;
  var transactions = [];

  function getBalance(){
    return balance;
  }

  function deposit(amount){
    balance+= amount;
    transactions.push(new Transaction('depost', amount));
  }

  function withdraw(amount){
    balance-= amount;
    transactions.push(new Transaction('withdraw', amount));
  }

  function getTransactions(){
    return transactions;
  }

  function printStatement(){
    return getBalance();
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
    statement: printStatement,
    reset: function(){
      balance = 0;
      transactions = [];
    }
  };

}();