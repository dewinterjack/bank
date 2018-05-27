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
});