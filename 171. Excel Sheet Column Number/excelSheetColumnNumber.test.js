const titleToNumber = require('./excelSheetColumn')

test('Given a string columnTitle that represents the column title, return its corresponding column number', () => {
    expect(titleToNumber("A")).toBe(1)
})

test('Given a string columnTitle that represents the column title, return its corresponding column number', () => {
    expect(titleToNumber("AB")).toBe(28)
})

test('Given a string columnTitle that represents the column title, return its corresponding column number', () => {
    expect(titleToNumber("ZY")).toBe(701)
})

