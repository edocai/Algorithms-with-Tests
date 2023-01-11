const validPalindrome = s => {
    let pointA = 0
    let pointB = s.length - 1

    while (pointA < pointB) {
        if (s[pointA] !== s[pointB]) {
            //check inner palindrome (inside the pointers)
            //for left
            const left = checkInnerPalindrome(pointA + 1, pointB, s)
            //and right
            const right = checkInnerPalindrome(pointA, pointB - 1, s)
            return left || right
        }
        pointA++
        pointB--
    }
    return true
};

const checkInnerPalindrome = (pointA, pointB, s) => {
    while (pointA < pointB) {
        if (s[pointA] !== s[pointB]) {
            return false
        }
        pointA++
        pointB--
    }
    return true
}

//Time: O(n) The main while loop we use can iterate up to N / 2 times, since each iteration represents a pair of characters.
//Space: O(1)

module.exports = validPalindrome