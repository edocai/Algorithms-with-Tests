const numberOfGoodPairs = require('./numberOfGoodPairs')

test('should return the number of good pairs', () => {
    expect(numberOfGoodPairs([1, 2, 3, 1, 1, 3])).toBe(4)
})

test('should return the number of good pairs', () => {
    expect(numberOfGoodPairs([1, 1, 1, 1])).toBe(6)
})

test('should return the number of good pairs', () => {
    expect(numberOfGoodPairs([1, 2, 3])).toBe(0)
})
