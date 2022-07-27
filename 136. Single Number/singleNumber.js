const singleNumber = nums => {
    let result = 0

    for (num of nums) {
        result ^= num
    }
    return result
};