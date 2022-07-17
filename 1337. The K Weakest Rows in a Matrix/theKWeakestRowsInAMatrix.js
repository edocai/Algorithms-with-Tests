const kWeakestRows = (mat, k) => {
    let objArray = []
    for (let i = 0; i < mat.length; i++) {
        objArray.push({
            index: i,
            count: mat[i].filter(i => i == 1).length
        })
    }
    let newObj = objArray.sort((a, b) => a.count - b.count).slice(0, k)
    finalArray = []
    for (o of newObj)
        finalArray.push(o.index)
    return finalArray
};

module.exports = kWeakestRows