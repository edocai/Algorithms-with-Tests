const rotate = require('./rotateArray')

test('should rotate the array to the right by k steps, where k is non-negative.', () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('should rotate the array to the right by k steps, where k is non-negative.', () => {
    expect(rotate([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100])
})

