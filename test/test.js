const { add } = require('..');
const { expect } = require('chai');
const { describe } = require('mocha');


describe('String Calculator ', function () {

    it('should return message when a falsy value is passed.', function () {
        expect(add(null)).to.equal('numbers should not be a falsy value.');
    });

    it('should return message when anything other than the string is passed.', function () {
        expect(add(-1)).to.equal('numbers must be of type string.');
    });

    it('should return "0" when the "" is passed.', function () {
        expect(add("")).to.equal(0);
    });

    it('should return the passed number itself when only a single number is passed.', function () {
        expect(add("10")).to.equal("10");
    });

    it('should return message when instead of a number string is passed.', function () {
        expect(add("ram")).to.equal("value is not a number.");
    });

    it('should return the addition of the numbers when two numbers are passed.', function () {
        expect(add("3,4")).to.equal(7);
    });

    it('should return the message when appropriate argument is not passed.', function () {
        expect(add("3,two")).to.equal("something went wrong while performing the Addition.");
    });

    it('should return the addition of the n numbers when n numbers are passed.', function () {
        expect(add("3,4,6,7")).to.equal(20);
    });

    it('should return the addition of the n numbers when numbers are seperated using a new line instead of comma.', function () {
        expect(add("1\n2,3")).to.equal(6);
    });

});