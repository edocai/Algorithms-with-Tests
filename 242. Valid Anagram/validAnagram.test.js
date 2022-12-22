const isAnagram = require('./validAnagram')

test('should return true if t is an anagram of s, and false otherwise', () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true)
})

test('should return true if t is an anagram of s, and false otherwise', () => {
    expect(isAnagram("rat", "car")).toBe(false)
})
