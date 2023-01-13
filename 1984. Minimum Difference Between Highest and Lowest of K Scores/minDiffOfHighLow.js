const minimumDifference = (nums, k) => {
    nums.sort((a, b) => a - b)
    let left = 0
    let right = k - 1
    let res = Infinity

    while (right < nums.length) {
        //res = min(infinity, 90 - 90)
        res = Math.min(res, nums[right] - nums[left])
        right++
        left++
    }
    return res
};

//sliding window
//sort the array
//while right < left
    //find min of res(set highest number) and result of subtracting two pointers
    //increment both right and left
//return res

//Time: O(nlogn)
//Space: O(1)