const assert = require('assert')
const calculateNumber = require('./0-calcul');
describe('calculateNumber', function() {
	describe('sum test', function() {
		it('check sum of a and b 1...', function() {
			assert.strictEqual(calculateNumber(1, 3), 4)	
		});
		it('check sum of a and b 2...', function() {
                	assert.strictEqual(calculateNumber(1, 3.7), 5)
        	});
		it('check sum of a and b 3...', function() {
                	assert.strictEqual(calculateNumber(1.2, 3.7), 5)
        	});
		it('check sum of a and b 4...', function() {
                	assert.strictEqual(calculateNumber(1.5, 3.7), 6)
        	});
		it('should work with zero values', function () {
        		const result = calculateNumber(0, 0);
        		assert.equal(result, 0);
			assert.equal(calculateNumber(0.9, 0.5), 2);
			assert.equal(calculateNumber(0.4, 0.7), 1);
		});
		it('should handle negative numbers correctly', function () {
        		const result = calculateNumber(-3.5, -2.3);
        		assert.equal(result, -5);
		});

	});
});

