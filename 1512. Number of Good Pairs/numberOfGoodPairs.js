const numberOfGoodPairs = nums => {
    const map = {};
    let count = 0;
    nums.forEach(num => {
        if (map[num]) {
            count += map[num];
            map[num]++;
        } else {
            map[num] = 1;
        }
    })
    return count;
}

module.exports = numberOfGoodPairs