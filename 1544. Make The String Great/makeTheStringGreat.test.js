const makeGood = require('./makeTheStringGreat')

test('should return the string after making it good.', () => {
    expect(makeGood("leEeetcode")).toEqual("leetcode")
})

test('should return the string after making it good.', () => {
    expect(makeGood("abBAcC")).toEqual("")
})

test('should return the string after making it good.', () => {
    expect(makeGood("s")).toEqual("s")
})

