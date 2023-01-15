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