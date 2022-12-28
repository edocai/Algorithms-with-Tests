const isPalindrome = s => {
    const alphanumericString = s.replace(/[^a-zA-Z0-9]/g, "");
    let reverse = ''

    for (let i = alphanumericString.length - 1; i >= 0; i--) {
        reverse = reverse + alphanumericString[i]
    }

    if (reverse.toLowerCase() === alphanumericString.toLowerCase()) return true

    return false
};

module.exports = isPalindrome