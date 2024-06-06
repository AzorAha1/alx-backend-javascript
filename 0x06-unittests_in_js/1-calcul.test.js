const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('sum test', function() {
    it('should add two positive numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('subtract test', function() {
    it('should subtract two numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
    });
  });

  describe('divide test', function() {
    it('should divide two positive numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should handle division by zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
