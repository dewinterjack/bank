function Account(){
  this.balance = 0;
}

Account.prototype.getBalance = function(){
  return this.balance;
};

module.exports = Account;