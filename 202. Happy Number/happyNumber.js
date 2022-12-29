const getSumNum = num => {
    let total = 0;

    while (num !== 0) {
        let lastDigit = num % 10; // this gets the last digit from any number
        num = Math.floor(num / 10); // this gives every number other than the last digit
        total += Math.pow(lastDigit, 2)
    }
    return total
}

const isHappy = n => {
    let fast = n
    let slow = n

    while (true) {
        fast = getSumNum(getSumNum(fast))
        slow = getSumNum(slow)

        if (fast === slow) {
            return fast === 1
        }
    }
};