const uniqueOccurrences = require('./uniqueNoOfOccurrences')

test('should return true if the number of occurrences of each value in the array is unique or false otherwise', () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true)
})

test('should return true if the number of occurrences of each value in the array is unique or false otherwise', () => {
    expect(uniqueOccurrences([1, 2])).toBe(false)
})

test('should return true if the number of occurrences of each value in the array is unique or false otherwise', () => {
    expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true)
})

