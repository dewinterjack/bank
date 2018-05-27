function Transaction(previousBalance, newBalance){
  this.previousBalance = previousBalance;
  this.newBalance = newBalance;
  this.determine();
}

Transaction.prototype.determine = function(){
  if(this.newBalance > this.previousBalance){
    this.type = "deposit";
  }
  else if(this.newBalance < this.previousBalance){
    this.type = "withdraw";
  }
};

module.exports = Transaction;