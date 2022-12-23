const missingNumber = require('./missingNumber')

test('should return the only number in the range that is missing from the array.', () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
})

test('should return the only number in the range that is missing from the array.', () => {
    expect(missingNumber([0, 1])).toBe(2)
})

test('should return the only number in the range that is missing from the array.', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
})

