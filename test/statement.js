var expect = require("chai").expect;
var Statement = require("../statement");
var statement;

beforeEach(function(){
  statement = new Statement(0);
});

describe("Statement", function(){
  it("can be given a current balance when created", function(){
    expect(statement.currentBalance).to.eq(0);
  });
});