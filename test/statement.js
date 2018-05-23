var expect = require("chai").expect;
var statement = require("../statement");

describe("Statement", function(){

  describe("#blockify", function(){
    it("creates a block", function(){
      expect(statement.blockify('03/5/2018')).to.eq('| 03/5/2018 |');
    });
  });

});

