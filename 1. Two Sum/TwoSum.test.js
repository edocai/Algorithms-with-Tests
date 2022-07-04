const twoSum = require('./twoSum')

test("when passed an arr that contains two nums that add to target return their indices", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

