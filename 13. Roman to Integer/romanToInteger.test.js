const romanToInt = require('./romanToInteger')

test('should convert roman numeral to integer', () => {
    expect(romanToInt("III")).toBe(3)
})

test('should convert roman numeral to integer', () => {
    expect(romanToInt("LVIII")).toBe(58)
})

test('should convert roman numeral to integer', () => {
    expect(romanToInt("MCMXCIV")).toBe(1994)
})

