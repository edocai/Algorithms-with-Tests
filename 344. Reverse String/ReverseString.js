const reverseString = string => {
    // Use two pointer method
    let start = 0, end = string.length - 1;

    while (start <= end) {
        // swap the letters at each pointer and increment/decrement respective pointers
        [string[start], string[end]] = [string[end], string[start]];
        start++;
        end--;
    }
};
