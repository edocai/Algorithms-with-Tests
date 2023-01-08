const replaceElements = arr => {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;

    for (let i = arr.length - 2; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = max;
        if (curr > max) max = curr;
    }

    return arr;
};


//new array of length arr
//let end of result elem = -1
//loop through backwards and check vertically arr[i] and result[i]
//result will now equal the max of the two
//return result

//Time: O(n)
//Space: O(n)
module.exports = replaceElements