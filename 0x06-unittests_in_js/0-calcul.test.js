const assert = require('assert');
const calculateNumber = require('./0-calcul');
describe('calculateNumber', function() {
  describe('sum test', function() {
    it('check sum of a and b 1...', function() {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('check sum of a and b 2...', function() {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('check sum of a and b 3...', function() {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it('check sum of a and b 4...', function() {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });
});

