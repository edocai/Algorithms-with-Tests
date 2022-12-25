const firstUniqChar = require('./firstUniqueCharInAString')

test('should find the first non-repeating character in it and return its index. If it does not exist, return -1.', () => {
    expect(firstUniqChar("leetcode")).toBe(0)
})

test('should find the first non-repeating character in it and return its index. If it does not exist, return -1.', () => {
    expect(firstUniqChar("loveleetcode")).toBe(2)
})

test('should find the first non-repeating character in it and return its index. If it does not exist, return -1.', () => {
    expect(firstUniqChar("aabb")).toBe(-1)
})

