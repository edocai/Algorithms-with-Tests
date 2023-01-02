const mergeAlternately = require('./mergeStringsAlternately')

test('should merge the strings by adding letters in alternating order, starting with word1', () => {
    expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr")
})

test('should merge the strings by adding letters in alternating order, starting with word1', () => {
    expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs")
})

test('should merge the strings by adding letters in alternating order, starting with word1', () => {
    expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd")
})

