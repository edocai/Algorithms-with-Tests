const sortedSquares = require('./squaresOfSortedArray')

test('should return an array of the squares of each number sorted in non-decreasing order', () => {
    expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100])
})

test('should return an array of the squares of each number sorted in non-decreasing order', () => {
    expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121])
})

