const islandPerimeter = require('./islandPerimeter')

test('should determine the perimeter of the island', () => {
  expect(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])).toBe(16)
})
