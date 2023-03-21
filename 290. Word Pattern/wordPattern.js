var wordPattern = function (pattern, s) {
  const patternMap = {}
  const sMap = {}
  let i = 0

  while (i < s.length) {
    let char1 = pattern[i]
    let char2 = s.split(' ')[i]
    if ((patternMap[char1] && patternMap[char1] !== char2) || (sMap[char2] && sMap[char2] !== char1)) {
      return false
    }
    patternMap[char1] = char2
    sMap[char2] = char1
    i++
  }
  return true
};