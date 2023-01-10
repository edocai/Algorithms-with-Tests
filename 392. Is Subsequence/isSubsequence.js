const isSubsequence = function (s, t) {
    let pointA = 0
    let pointB = 0

    while (pointA < s.length && pointB < t.length) {
        if (s[pointA] === t[pointB]) {
            pointA++
            pointB++
        } else {
            pointB++
        }
    }
    return pointA === s.length
};

//Two pointer method
//start at each string beginning
//if the char at both points are equal
    //increment both
//else
    //increment pointer for second string
//check if first point equals length of s

//Time: O(n)
//Space: O(1)