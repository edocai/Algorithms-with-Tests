const permute = require('./permutations')

test('should return all the possible permutations', () => {
    expect(permute([1, 2, 3])).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]])
})

test('should return all the possible permutations', () => {
    expect(permute([0, 1])).toEqual([[0, 1], [1, 0]])
})

test('should return all the possible permutations', () => {
    expect(permute([1])).toEqual([[1]])
})

