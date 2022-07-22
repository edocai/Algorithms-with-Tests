const containsDuplicate = require('./containsDuplicate')

test('should return true or false if there is a duplicate or not', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy()
})

test('should return true or false if there is a duplicate or not', () => {
    expect(containsDuplicate([1, 2, 3])).toBeFalsy()
})
