var Transaction = require("./transaction");
var statement = require("./statement");

module.exports = function(){

  var balance = 0;
  var transactions = [];

  return {
    getBalance: () => { return balance; },

    deposit: function(amount){
      if(typeof amount == 'number'){
        balance+= amount;
        transactions.push(new Transaction('depost', amount));
      } else {
        throw new TypeError("Amount to deposit must be a number.");
      }
      
    },

    withdraw: function withdraw(amount){
      if(typeof amount == 'number'){
        balance-= amount;
        transactions.push(new Transaction('withdraw', amount));
      } else {
        throw new TypeError("Amount to withdraw must be a number.");
      }  
    },

    reset: function(){
      balance = 0;
      transactions = [];
    },
    
    statement: function(){
      var output = '';
      var head = statement.header(['date', 'type', 'amount']); 
      head.forEach(function(item){
        output+=item;
      });
      console.log(output);
      output = '';
      var body = transactions.map(t => [t.getDate(), t.type, t.amount]);
      body.forEach(function(item){
          statement.body(item).forEach(function(item){
            output+=item;
          });
          console.log(output);
          output = '';
      });
      }
  };

}();