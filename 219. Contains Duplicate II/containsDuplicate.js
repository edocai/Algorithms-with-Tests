var containsNearbyDuplicate = function (nums, k) {
  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //         if(nums[i] === nums[j] && Math.abs(i - j) <= k) {
  //             return true
  //         }
  //     }
  // }
  // return false
  //Time: O(n^2)
  //Space: O(1)

  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(map[nums[i]] - i) <= k) {
      return true
    } else {
      map[nums[i]] = i
    }
  }
  return false
};

//hash map
//if the num is in map then check the diff of indexes
    //return true if they are less than or equals to k
//else place the index of the num in the map

//Time: O(n)
//Space: O(n)

module.exports = containsNearbyDuplicate