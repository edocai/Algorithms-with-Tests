const intersect = require('./intersectionOfTwoArrays')

test('should return an array of the two arrays intersection', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
})

test('should return an array of the two arrays intersection', () => {
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4])
})

