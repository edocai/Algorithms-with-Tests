const singleNumber = require('./singleNumber')

test('should find the single number in an array of duplicates', () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
})

test('should find the single number in an array of duplicates', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
})

test('should find the single number in an array of duplicates', () => {
    expect(singleNumber([1])).toBe(1)
})

