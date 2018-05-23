module.exports = function(){

  var balance = 0;

  function getBalance(){
    return balance;
  }

  return {
    getBalance: getBalance
  };

}();