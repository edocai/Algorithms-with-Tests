const majorityElement = require('./majorityElement')

test('should return the majority element', () => {
    expect(majorityElement([3, 2, 3])).toBe(3)
})

test('should return the majority element', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
})

