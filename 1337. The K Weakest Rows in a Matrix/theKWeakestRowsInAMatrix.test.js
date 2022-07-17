const kWeakestRows = require('./theKWeakestRowsInAMatrix')

test('should return the indices of the k weakest rows in the matrix ordered from weakest to strongest.', () => {
    expect(kWeakestRows([[1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]],
        3))
        .toEqual([2, 0, 3])
})

test('should return the indices of the k weakest rows in the matrix ordered from weakest to strongest.', () => {
    expect(kWeakestRows([[1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0]],
        2))
        .toEqual([0, 2])
})


