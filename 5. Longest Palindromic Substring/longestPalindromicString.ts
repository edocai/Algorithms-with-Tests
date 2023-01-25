function longestPalindrome(s: string): string {
  if (s.length < 1 || !s) return "";

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandFromCenter(s, i, i);
    let evenPalindrome = expandFromCenter(s, i, i + 1);

    if (oddPalindrome.length > longest.length) longest = oddPalindrome;
    if (evenPalindrome.length > longest.length) longest = evenPalindrome;
  }
  return longest;
}

function expandFromCenter(s: string, left: number, right: number): string {
  let i = 0;
  while (s[left - i] && s[left - i] === s[right + i]) {
    i++;
  }
  //decrement so we return the last palindome
  i--;
  //return "right + i + 1" so slice includes right + i
  return s.slice(left - i, right + i + 1);
}

//Time: O(n^2)
//Space: O(n)
