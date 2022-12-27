const intersect = (nums1, nums2) => {
    let map = {}
    let result = []

    for (let num of nums1) {
        if (map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    }

    for (let num of nums2) {
        if (map[num] > 0) {
            result.push(num)
            map[num]--
        }
        if (map[num] === 0) {
            delete map[num]
        }
    }

    return result
};

module.exports = intersect