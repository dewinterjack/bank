module.exports = function(){

  var balance = 0;

  function getBalance(){
    return balance;
  }

  function deposit(amount){
    balance+= amount;
  }

  return {
    getBalance: getBalance,
    deposit: deposit
  };

}();