// const sortedSquares = nums => {
//     squaredArray = []
//     for(let i = 0; i < nums.length; i++) {
//         squaredArray.push(nums[i] * nums[i])
//     }
//     return squaredArray.sort((a, b) => a - b)
// };

//square every element in the array
//return that array but sorted

//Time Complexity: O(nlogn)
//Space Complexity: O(n)

const sortedSquares = nums => {
    let results = new Array(nums.length).fill(0)
    let resIdx = nums.length - 1
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let leftVal = Math.pow(nums[left], 2)
        let rightVal = Math.pow(nums[right], 2)

        if (leftVal > rightVal) {
            results[resIdx] = leftVal
            left++
            resIdx--
        }
        else {
            results[resIdx] = rightVal
            right--
            resIdx--
        }
    }
    return results
};

//Two pointer method
//Create a results array with nums length
//Let results index = nums.length - 1
//while left <= right
    //just check if nums[left]^2 is bigger than nums[right]^2
        //results[resIdx] = nums[left]^2
    //else
        //results[resIdx] = nums[right]^2
//return results

//Time Complexity: O(n)
//Space Complexity: O(n)

module.exports = sortedSquares