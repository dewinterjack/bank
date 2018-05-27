var expect = require("chai").expect;
var Statement = require("../statement");
var Transaction = require("../transaction");

var statement;

beforeEach(function(){
  statement = new Statement();
});

describe("Statement", function(){
  describe("#recordTransaction", function(){
    it("stores a new transaction in an array", function(){
      statement.recordTransaction(300, 500);
      expect(statement.transactions[0]).to.be.an.instanceof(Transaction);
    });
  });
});