const reverseString = require('./reverseString')

test('reverse any single string array given', () => {
    expect(reverseString(["H", "a", "n", "n", "a", "h"])).toStrictEqual(["h", "a", "n", "n", "a", "H"]);
});
