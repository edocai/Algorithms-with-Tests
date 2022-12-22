const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false
    }

    const map = {}

    for (let char of s) {
        if (map[char]) {
            map[char]++
        }
        else {
            map[char] = 1
        }
    }

    for (let char of t) {
        if (!map[char]) {
            return false
        }
        else {
            map[char]--
        }

        if (map[char] === 0) {
            delete map[char]
        }
    }
    return Object.keys(map).length === 0
}

module.exports = isAnagram