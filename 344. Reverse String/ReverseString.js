const reverseString = stringArray => {
    // Use two pointer method
    let start = 0, end = stringArray.length - 1;

    while (start <= end) {
        // swap the letters at each pointer and increment/decrement respective pointers
        [stringArray[start], stringArray[end]] = [stringArray[end], stringArray[start]];
        start++;
        end--;
    }
};


module.exports = reverseString