const removeElement = (nums, val) => {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        if(nums[left] === val) {
            nums[left] = nums[right]
            right--
        } else {
            left++
        }
    }
    return left
};

//Two pointer method
//if nums[left] === val replace with nums[right] and decrement right
//else increment left
//return left

//Time Complexity: O(n)
//Space Complexity: O(1)

module.exports = removeElement