var expect = require("chai").expect;
var statement = require("../statement");

describe("Statement", function(){
  describe("#header", function(){
    it("turns a list of headings into a list of formatted headers", function(){
      expect(statement.header(['date', 'type', 'amount']))
      .to.deep.eq(['| Date |','| Type |','| Amount |']);
    });
  });

  // describe("#blockifyByHead", function(){
  //   it("creates a block using the size of its heading", function(){
  //     expect(statement.blockifyByHead('03/5/2018', 'Date')).to.be('|');
  //   });
  // });
});

