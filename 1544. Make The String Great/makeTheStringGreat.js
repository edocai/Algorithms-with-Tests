const makeGood = s => {
    let stack = []

    //loop through the string
    for (let i = 0; i < s.length; i++) {
        //if minus of charCodeAt from s[i] and end of stack === 32 
        //then they are the same and you pop 
        if (stack.length && Math.abs(s[i].charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32) {
            stack.pop()
        } else {
            //else just push the value
            stack.push(s[i])
        }
    }
    return stack.join('')
};

//Time: O(n)
//Space: O(n)

module.exports = makeGood