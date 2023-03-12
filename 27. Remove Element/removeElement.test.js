const removeElement = require('./removeElement')

test('should remove all occurrences of val in nums in-place.', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2)
})

test('should remove all occurrences of val in nums in-place.', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
})

