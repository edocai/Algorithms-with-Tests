var uniqueOccurrences = function (arr) {
    const map = {}

    for (let a of arr) {
        if (map[a]) {
            map[a]++
        } else {
            map[a] = 1
        }
    }
    let count = Object.values(map)
    return count.length === new Set(count).size
};