var Transaction = require("./transaction");
var statement = require("./statement");

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

  function reset(){
    balance = 0;
    transactions = [];
  }

  return {
    getBalance  : getBalance,
    deposit     : deposit,
    withdraw    : withdraw,
    reset       : reset,
    statement   : () => { statement.print(); }
  };

}();