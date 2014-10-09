// Code coverage through blanket

require('blanket')({
    pattern: function (filename) {
        return !/node_modules/.test(filename);
    }
});

// Test cases

var expect = require("chai").expect;
var cut = require("../lib/cut.js");


describe("Testing Cut function", function(){
    describe("Testing reduce module", function(){
        it("should reduce the array of lenght 6", function(){

            var args = [5,4,4,2,2,8];
            var length = args.length;
            var results = cut.reduce(args, length);

            var expected = [6,4,2,1];

            expect(results).to.eql(expected);
        });

        it("should reduce the array of lenght 8", function(){

            var args = [1, 2, 3, 4, 3, 3, 2, 1];
            var length = args.length;
            var results = cut.reduce(args, length);

            var expected = [8,6,4,1];

            expect(results).to.eql(expected);
        });


    });
});