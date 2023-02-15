function maxProduct(nums) {
  // let results = []

  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //         results.push((nums[i] - 1)*(nums[j] - 1))
  //     }
  // }
  // return Math.max(...results)

  //Time: O(n^2)
  //Space: O(n)

  nums.sort((a, b) => a - b)
  let i = nums.length - 1
  return (nums[i] - 1) * (nums[i - 1] - 1)

  //Time: O(nlog(n))
  //Space: O(1)
};

module.exports = maxProduct