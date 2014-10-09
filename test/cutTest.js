// Test cases

var expect = require("chai").expect;
var cut = require("../lib/cut.js");


describe("Testing Cut function", function(){
    describe("Testing parse module", function(){
        it("should parse long formed tags", function(){

            var args = [5,4,4,2,2,8];
            var length = args.length;
            var results = cut.reduce(args, length);

            var expected = [6,4,2,1];

            expect(results).to.eql(expected);
        });

        it("should parse long formed tags", function(){

            var args = [1, 2, 3, 4, 3, 3, 2, 1];
            var length = args.length;
            var results = cut.reduce(args, length);

            var expected = [8,6,4,1];

            expect(results).to.eql(expected);
        });


    });
});