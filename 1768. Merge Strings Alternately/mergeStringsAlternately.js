const mergeAlternately = (word1, word2) => {
    let merged = ''

    for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
        merged += word1[i] + word2[i]
    }

    if (word2.length < word1.length) {
        merged += word1.slice(word2.length);
    } else if (word1.length < word2.length) {
        merged += word2.slice(word1.length);
    }

    return merged
};