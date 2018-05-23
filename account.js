module.exports = function(){

  var balance = 0;
  var transactions = [];

  function getBalance(){
    return balance;
  }

  function deposit(amount){
    balance+= amount;
  }

  function withdraw(amount){
    balance-= amount;
  }

  function getTransactions(){
    return transactions;
  }

  return {
    getBalance: getBalance,
    deposit: deposit,
    withdraw: withdraw,
    getTransactions: getTransactions,
    reset: function(){
      balance = 0;
      transactions = [];
    }
  };

}();