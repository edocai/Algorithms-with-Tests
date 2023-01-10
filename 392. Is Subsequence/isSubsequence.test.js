const isSubsequence = require('./isSubsequence')

test('should return true if s is a subsequence of t, or false otherwise', () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true)
})

test('should return true if s is a subsequence of t, or false otherwise', () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false)
})

