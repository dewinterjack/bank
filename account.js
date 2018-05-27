function Account(){
  this.balance = 0;
}

Account.prototype.getBalance = function(){
  return this.balance;
};

Account.prototype.deposit = function(amount){
  this.balance += amount;
};

Account.prototype.withdraw = function(amount){
  this.balance -= amount;
};

module.exports = Account;