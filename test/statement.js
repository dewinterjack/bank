var expect = require("chai").expect;
var statement = require("../statement");

describe("Statement", function(){

  describe("#header", function(){
    it("turns a list of headings into a list of formatted headers", function(){
      expect(statement.header(['date', 'type', 'amount'])).to.deep.eq(['| Date |','| Type |','| Amount |']);
    });
  });
});

