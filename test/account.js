var expect = require("chai").expect;
var Account = require("../account");
var account;

beforeEach(function(){
  account = new Account();
});

describe("Account", function(){
  it("Has a balance of 0 when created", function(){
    expect(account.getBalance()).to.eq(0);
  });

  describe("#deposit", function(){
    it("raises the balance by the amount given", function(){
      account.deposit(120);
      expect(account.getBalance()).to.eq(120);
    });
  });
  
  describe("#withdraw", function(){
    it("lowers the balance by the amount given", function(){
      account.deposit(100);
      account.withdraw(60);
      expect(account.getBalance()).to.eq(40);
    });
  });

});