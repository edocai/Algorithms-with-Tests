const isPalindrome = require('./validPalindrome')

test('should return true if it is a palindrome, or false otherwise', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
})

test('should return true if it is a palindrome, or false otherwise', () => {
    expect(isPalindrome("race a car")).toBe(false)
})

test('should return true if it is a palindrome, or false otherwise', () => {
    expect(isPalindrome(" ")).toBe(true)
})

