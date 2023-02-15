const maxProduct = require('./maximumProduct')

test('should return the maximum value of (nums[i]-1)*(nums[j]-1)', () => {
  expect(maxProduct([3, 4, 5, 2])).toBe(12)
})

test('should return the maximum value of (nums[i]-1)*(nums[j]-1)', () => {
  expect(maxProduct([1, 5, 4, 5])).toBe(16)
})

test('should return the maximum value of (nums[i]-1)*(nums[j]-1)', () => {
  expect(maxProduct([3, 7])).toBe(12)
})
