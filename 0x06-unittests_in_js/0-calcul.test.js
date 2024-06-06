const assert = require('assert')
const calculateNumber = require('./0-calcul');
describe('sum test', function() {
	it('check sum of a and b', function() {
		assert.equal(calculateNumber(1, 3), 4)
	})
})
