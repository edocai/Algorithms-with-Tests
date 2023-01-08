const replaceElements = arr => {
    const result = new Array(arr.length);
    result[arr.length - 1] = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        result[i - 1] = Math.max(arr[i], result[i]);
    }

    return result;
};

//new array of length arr
//let end of result elem = -1
//loop through backwards and check vertically arr[i] and result[i]
    //result will now equal the max of the two
//return result

//Time: O(n)
//Space: O(n)