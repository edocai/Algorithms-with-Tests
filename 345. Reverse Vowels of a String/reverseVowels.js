var reverseVowels = function (s) {
  let map = {
    'a': true, 'e': true, 'i': true, 'o': true, 'u': true,
    'A': true, 'E': true, 'I': true, 'O': true, 'U': true
  }
  let array = s.split("")
  let left = 0;
  let right = array.length - 1

  while (left < right) {
    while (left < right && !map[array[right]]) {
      right--
    }
    while (left < right && !map[array[left]]) {
      left++
    }
    [array[left], array[right]] = [array[right], array[left]]
    left++
    right--
  }
  return array.join('')
};

//Two pointer method
//create map for vowels
//change string to an array as strings are immutable
//while left pointer is smaller than right
    //and char at right is not in vowels
        //decrement right
    //and char at left is not in vowels
        //increment left
//otherwise just swap left and right and increment/decrement both
//return array.join to turn it back to a string

//Time: O(n)
//Space: O(n)