var Transaction = require("./transaction");
var statement = require("./statement");

module.exports = function(){

  var balance = 0;
  var transactions = [];

  return {
    getBalance: () => { return balance; },

    deposit: function(amount){
      balance+= amount;
      transactions.push(new Transaction('depost', amount));
    },

    withdraw: function withdraw(amount){
      balance-= amount;
      transactions.push(new Transaction('withdraw', amount));
    },

    reset: function(){
      balance = 0;
      transactions = [];
    },
    
    statement: () => { statement.print(); }
  };

}();