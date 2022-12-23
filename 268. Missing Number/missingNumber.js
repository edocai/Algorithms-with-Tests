const missingNumber = nums => {
    const map = {}

    for (let num of nums) {
        if (map[num]) {
            map[num]++
        }
        else {
            map[num] = 1
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!map[i]) return i
    }
};

module.exports = missingNumber