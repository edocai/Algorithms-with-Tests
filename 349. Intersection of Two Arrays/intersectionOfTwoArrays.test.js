const intersection = require('./intersectionOfTwoArrays')

test('Given two integer arrays nums1 and nums2, return an array of their intersection', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2])
})

test('Given two integer arrays nums1 and nums2, return an array of their intersection', () => {
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4])
})

