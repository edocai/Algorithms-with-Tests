const numberOfSteps = require('./numberOfStepsToReduceANumberToZero')

test('should return the number of steps to reduce it to zero.', () => {
    expect(numberOfSteps(14)).toBe(6)
})

test('should return the number of steps to reduce it to zero.', () => {
    expect(numberOfSteps(8)).toBe(4)
})

test('should return the number of steps to reduce it to zero.', () => {
    expect(numberOfSteps(123)).toBe(12)
})

