const minimumDifference = require('./minDiffOfHighLow')

test('should return the minimum possible difference', () => {
    expect(minimumDifference([90], 1)).toBe(0)
})

test('should return the minimum possible difference', () => {
    expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2)
})

