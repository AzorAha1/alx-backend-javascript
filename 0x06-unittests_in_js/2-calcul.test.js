const calculateNumber = require('./2-calcul_chai');
const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function() {
  describe('sum test', function() {
    it('should add two positive numbers', function() {
      chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('subtract test', function() {
    it('should subtract two numbers', function() {
      chai.expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
    });
  });

  describe('divide test', function() {
    it('should divide two positive numbers', function() {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should handle division by zero', function() {
      chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
