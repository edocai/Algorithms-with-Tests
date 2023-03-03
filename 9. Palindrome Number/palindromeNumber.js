var isPalindrome = function (x) {
  const alphanumericString = x.toString();
  let reverse = ''

  for (let i = alphanumericString.length - 1; i >= 0; i--) {
    reverse = reverse + alphanumericString[i]
  }

  return parseInt(reverse) === x
};