const numJewelsInStones = (jewels, stones) => {
    const jewelsMap = {}
    let count = 0
    for (let i = 0; i < stones.length; i++) {
        if (jewelsMap[stones[i]]) {
            jewelsMap[stones[i]]++
        }
        else {
            jewelsMap[stones[i]] = 1
        }
    }

    for (let j = 0; j < jewels.length; j++) {
        if (jewelsMap[jewels[j]]) {
            count += jewelsMap[jewels[j]]
        }
    }
    return count
};