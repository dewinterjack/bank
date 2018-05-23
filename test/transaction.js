var expect = require("chai").expect;
var Transaction = require("../transaction");

describe("Transaction", function(){
  it("sets the date to the current date on creation", function(){

    var transaction = new Transaction("credit", 300);
    let today = new Date();
    
    expect(transaction.getDate())
      .to.include(today.getDate() && today.getMonth() + 1 && today.getFullYear());
  });
});