const validPalindrome = require('./validPalindromeII')

test('should return true if the s can be palindrome after deleting at most one character from it', () => {
    expect(validPalindrome("aba")).toBe(true)
})

test('should return true if the s can be palindrome after deleting at most one character from it', () => {
    expect(validPalindrome("abca")).toBe(true)
})

test('should return true if the s can be palindrome after deleting at most one character from it', () => {
    expect(validPalindrome("abc")).toBe(false)
})

