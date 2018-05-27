var expect = require("chai").expect;
var Account = require("../account");
var Statement = require("../statement");
var account;

beforeEach(function(){
  account = new Account();
});

describe("Account", function(){
  it("Has a balance of 0 when created", function(){
    expect(account.getBalance()).to.eq(0);
  });

  it("Has a statement when created", function(){
    expect(account.statement).to.be.an.instanceof(Statement);
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