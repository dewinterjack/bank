var expect = require("chai").expect;
var statement = require("../statement");

describe("Statement", function(){

  describe("#header", function(){
    it("capitalises a heading", function(){
      expect(statement.header(['hello'])).to.eq('| Hello |');
    });
  });

  // describe("#blockifyByHead", function(){
  //   it("creates a block using the size of its heading", function(){
  //     expect(statement.blockifyByHead('03/5/2018', 'Date')).to.be('|');
  //   });
  // });
});

