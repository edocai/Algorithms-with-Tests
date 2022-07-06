const fizzBuzz = require('./fizzBuzz');

test('returns 1 for the number 1', () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
});

test('returns 7 for the number 7', () => {
    expect(fizzBuzz(7)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]);
});

test('returns "Fizz" for the number 3', () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
});

test('returns "Fizz" for the number 9', () => {
    expect(fizzBuzz(9)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz"]);
});

test('returns "Buzz" for the number 5', () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
});

test('returns "Buzz" for the number 10', () => {
    expect(fizzBuzz(10)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]);
});

test('returns "FizzBuzz" for the number 15', () => {
    expect(fizzBuzz(15)).toEqual([
        '1', '2',
        'Fizz', '4',
        'Buzz', 'Fizz',
        '7', '8',
        'Fizz', 'Buzz',
        '11', 'Fizz',
        '13', '14',
        'FizzBuzz'
    ]);
});

test('returns "FizzBuzz" for the number 30', () => {
    expect(fizzBuzz(30)).toEqual([
        '1', '2', 'Fizz',
        '4', 'Buzz', 'Fizz',
        '7', '8', 'Fizz',
        'Buzz', '11', 'Fizz',
        '13', '14', 'FizzBuzz',
        '16', '17', 'Fizz',
        '19', 'Buzz', 'Fizz',
        '22', '23', 'Fizz',
        'Buzz', '26', 'Fizz',
        '28', '29', 'FizzBuzz']);
});