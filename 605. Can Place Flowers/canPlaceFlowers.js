const canPlaceFlowers = (flowerbed, n) => {
  let count = n
  if (n === 0) return true
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0) {
      flowerbed[i] = 1
      count--
    }
    if (flowerbed[0] === 0 && flowerbed[1] === 0) {
      flowerbed[0] = 1
      count--
    }
    if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0 && count > 0) {
      flowerbed[flowerbed.length - 1] = 1
      count--
    }
    if (flowerbed.length === 1 && flowerbed[0] === 0 && count > 0) {
      flowerbed[0] = 1
      count--
    }
    if (count === 0) break;
  }
  return count === 0
};

//Array problem
//let count = n
//loop through array
//see if at i if left and right and i are all 0
    //set i to 1 and decrement count
//check beginning and end of flowerbed
    //set i to 1 and decrement count
// return true if count is equal to 0

//Time: O(n)
//Space: O(1)