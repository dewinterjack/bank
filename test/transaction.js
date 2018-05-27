var expect = require("chai").expect;
var Transaction = require("../transaction");
var transaction;

describe("Transaction", function(){
  describe("#determine", function(){
    it("stores the type of transaction", function(){
      transaction = new Transaction(200, 300);
      expect(transaction.type).to.eq("deposit");
    });
  });
});