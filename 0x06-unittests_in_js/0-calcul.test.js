const assert = require('assert')
const calculateNumber = require('./0-calcul');
describe('calculateNumber', function() {
	describe('sum test', function() {
	it('check sum of a and b', function() {
		assert.equal(calculateNumber(1, 3), 4)
		assert.equal(calculateNumber(1, 3.7), 5)
		assert.equal(calculateNumber(1.2, 3.7), 5)
		assert.equal(calculateNumber(1.5, 3.7), 6)	
	})
})
})

