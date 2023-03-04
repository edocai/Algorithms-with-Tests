const twoSum = require('./twoSumII')

test('should return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
})

test('should return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2', () => {
  expect(twoSum([2, 3, 4], 6)).toEqual([1, 3])
})

test('should return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2', () => {
  expect(twoSum([-1, 0], -1)).toEqual([1, 2])
})

