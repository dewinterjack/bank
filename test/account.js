var expect = require("chai").expect;
var account = require("../account");

describe("Bank Account", function(){

  describe("#getBalance", function(){
    it("returns 0 when the account is created", function(){
      expect(account.getBalance()).to.eq(0);
    });
  });

  describe("#deposit", function(){
    it("adds an integer to the balance", function(){
      account.deposit(300);
      expect(account.getBalance()).to.eq(300);
    });
  });
});