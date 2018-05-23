function Transaction(type, amount){
  this.date = new Date();
  this.type = type;
  this.amount = amount;
}

Transaction.prototype.getDate = function(){
  return this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear();
};

module.exports = Transaction;