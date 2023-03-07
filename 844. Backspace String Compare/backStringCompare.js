const backspaceCompare = (s, t) => {
  let first = s.length - 1
  let second = t.length - 1

  let firstSkip = 0
  let secondSkip = 0

  while (first >= 0 || second >= 0) {
    while (first >= 0) {
      if (s.charAt(first) === '#') {
        firstSkip++
        first--
      } else if (firstSkip > 0) {
        firstSkip--
        first--
      } else break;
    }
    while (second >= 0) {
      if (t.charAt(second) === '#') {
        secondSkip++
        second--
      } else if (secondSkip > 0) {
        secondSkip--
        second--
      } else break;
    }
    if (first >= 0 && second >= 0 && s.charAt(first) != t.charAt(second))
      return false

    if (s.charAt(first) !== t.charAt(second))
      return false

    first--
    second--
  }
  return true
};

//Two pointer method
//Both pointers at the end of each string
//if '#' then increment the respective skip
//if skips > 0 decrement skip and respective pointer
    //else break from both loops respectively
//else just decrement both pointers
//return false if the charAt each string are not equal
//return true if we break out of the loop and everything is successful

//Time: O(n + m) traversing through two strings
//Space: O(1)