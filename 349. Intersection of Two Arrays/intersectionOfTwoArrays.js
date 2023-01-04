const intersection = (nums1, nums2) => {
    const map = {}
    let result = []

    for (let num of nums1) {
        if (map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    }

    for (let num of nums2) {
        if (map[num]) {
            result.push(num)
        }
    }
    let news = new Set(result)
    return Array.from(news)
};

//Time Complexity: O(n)
//Space Complexity: O(n)

module.exports = intersection