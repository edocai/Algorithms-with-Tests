const numJewelsInStones = require('./jewelsAndStones')

test('should how many of the stones you have that are also jewels', () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3)
})

test('should how many of the stones you have that are also jewels', () => {
    expect(numJewelsInStones("z", "ZZ")).toBe(0)
})
