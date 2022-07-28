const majorityElement = nums => {
    let count = {}; // mapping of element to it's frequency
    for (n of nums) {
        count[n] ? count[n]++ : count[n] = 1;
        if (count[n] > nums.length / 2) return n;
    }
    return -1;
};

module.exports = majorityElement