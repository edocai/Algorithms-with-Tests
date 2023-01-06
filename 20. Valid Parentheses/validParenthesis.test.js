const isValid = require('./validParenthesis')

test('should determine if the input string is valid', () => {
    expect(isValid("()")).toBe(true)
})

test('should determine if the input string is valid', () => {
    expect(isValid("()[]{}")).toBe(true)
})

test('should determine if the input string is valid', () => {
    expect(isValid("(]")).toBe(false)
})

