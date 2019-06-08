/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const wordsSize = [];
    for(let i = 0; i < s.length; i++) {
        const word = s.slice(0, i + 1);
        if (wordSet.has(word)) {
            wordsSize.push(i);
        } else {
            for(let j = wordsSize.length - 1; j >=0; j--) {
                // console.log(word, word.slice(wordsSize[j] + 1))
                if (wordSet.has(word.slice(wordsSize[j] + 1))) {
                    wordsSize.push(i);
                    break;
                }
            }
        }
    }
    // console.log(wordsSize);
    return wordsSize[wordsSize.length - 1] === s.length - 1;
};
// console.log(wordBreak("leetcode", ["leet","code"]))

