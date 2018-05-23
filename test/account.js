var expect = require("chai").expect;
var account = require("../account");

describe("Bank Account", function(){

  describe("#getBalance", function(){
    it("returns 0 when an account is first created", function(){
      expect(account.getBalance()).to.eq(0);
    });
  });
});