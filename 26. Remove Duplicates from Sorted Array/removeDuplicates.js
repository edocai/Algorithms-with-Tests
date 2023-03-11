var removeDuplicates = function (nums) {
  let index = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1]
      index++
    }
  }
  return index
};

//Use a pointer at index 1 because at index 0 it will always be unique
//loop through the array and check if nums[i] !== nums[i + 1]
    //if they dont equal then nums[index] = nums[i + 1]
    //increment index
//return index

//Time Complexity: O(n)
//Space Complexity: O(1)