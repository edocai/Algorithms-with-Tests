var pivotIndex = function (nums) {
  let leftSum = 0
  let sum = 0

  nums.forEach((num) => {
    sum += num
  })

  for (let i = 0; i < nums.length; i++) {
    //  28 - 0 - 1 === 0
    //  28 - 1 - 7 === 1
    //  28 - 8 - 3 === 8
    //  28 - 11 - 6 === 11
    if (sum - leftSum - nums[i] === leftSum) {
      return i
    } else {
      leftSum += nums[i]
    }
  }
  return -1
};

//math
//first find the total of the array of integers
//then check until the calculation is equal to leftSum
    //return i
//else
    //continue to add to leftSum


//Time: O(n)
//Space: O(1)