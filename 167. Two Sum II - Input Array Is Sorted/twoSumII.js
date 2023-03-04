const twoSum = (numbers, target) => {
        let left = 0
        let right = numbers.length - 1

        while(left < right) {
            let sum = numbers[left] + numbers[right]
            if(sum === target) {
                return [left + 1, right + 1]
            } else if(sum > target) {
                right--
            } else {
                left++
            }
        }
};

//Two pointers
//left and a right
//loop while left is smaller
//sum varianle that sums the two pointers
    //if sum === target 
        //return pointers with + 1
    //else increment each pointer respectively

//Time: O(n)
//Space: O(1)

module.exports = twoSum