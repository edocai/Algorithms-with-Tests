const longestCommonPrefix = require('./longestCommonPrefix')

test('should find the longest common prefix string amongst an array of strings', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl")
})

test('should find the longest common prefix string amongst an array of strings', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("")
})

