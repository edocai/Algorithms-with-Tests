const containsDuplicate = require('./containsDuplicate')

test('should return true or false if there is a duplicate or not', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true)
})

test('should return true or false if there is a duplicate or not', () => {
    expect(containsDuplicate([1, 2, 3])).toEqual(false)
})
