var isIsomorphic = function (s, t) {
  const sMap = {}
  const tMap = {}
  let i = 0

  while (i < s.length) {
    let char1 = s[i]
    let char2 = t[i]
    if ((sMap[char1] && sMap[char1] !== char2) || (tMap[char2] && tMap[char2] !== char1)) {
      return false
    }
    sMap[char1] = char2
    tMap[char2] = char1
    i++
  }
  return true
};
