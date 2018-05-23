module.exports = function(){

  var balance = 0;

  function getBalance(){
    return balance;
  }

  function deposit(amount){
    balance+= amount;
  }

  function withdraw(amount){
    balance-= amount;
  }

  return {
    getBalance: getBalance,
    deposit: deposit,
    withdraw: withdraw
  };

}();