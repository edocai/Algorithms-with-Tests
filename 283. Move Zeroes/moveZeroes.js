const moveZeroes = nums => {
    // two pointer method - one iterates other focuses on non-zero elems
    let count = 0
    let len = nums.length
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count++] = nums[i]
        }
    }
    // after checking non-zero elems - starts from count and just adds 0's
    // to the end of array length
    for (let i = count; i < len; i++) {
        nums[i] = 0
    }
    return nums
};

module.exports = moveZeroes