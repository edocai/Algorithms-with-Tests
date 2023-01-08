const replaceElements = require('./replaceElements')

test('should replace every element in that array with the greatest element among the elements to its right and replace the last element with -1', () => {
    expect(replaceElements([17, 18, 5, 4, 6, 1])).toStrictEqual([18, 6, 6, 6, 1, -1])
})

test('should replace every element in that array with the greatest element among the elements to its right and replace the last element with -1', () => {
    expect(replaceElements([400])).toStrictEqual([-1])
})

