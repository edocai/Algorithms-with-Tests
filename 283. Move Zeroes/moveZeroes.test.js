const moveZeroes = require('./moveZeroes')

test('should move all 0s to the end of the given integer array', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])
})

test('should move all 0s to the end of the given integer array', () => {
    expect(moveZeroes([0])).toEqual([0])
})

