var expect = require("chai").expect;
var account = require("../account");

describe("Bank Account", function(){

  beforeEach(function(){
    account.reset();
  });

  describe("#getBalance", function(){
    it("returns 0 when the account is created", function(){
      expect(account.getBalance()).to.eq(0);
    });
  });

  describe("#deposit", function(){
    it("adds an amount to the balance", function(){
      account.deposit(300);
      expect(account.getBalance()).to.eq(300);
    });
  });

  describe("#withdraw", function(){
    it("subtracts an amount from the balance", function(){
      account.deposit(300);
      account.withdraw(100);
      expect(account.getBalance()).to.eq(200);
    });
  });
});