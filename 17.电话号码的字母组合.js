/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) {
        return [];
    }
    let result = [''];
    const charA = 'a'.charCodeAt();
    for (let i = 0; i < digits.length; i++) {
        const res = [];
        const num = Number(digits[i]);
        const start = (num - 2) * 3 + (num > 7 ? 1: 0) + charA;
        for (let j = 0; j < result.length; j++) {
            for (let i = 0; i < (num === 7 || num == 9 ? 4 : 3); i++) {
                res.push(result[j] + String.fromCharCode(start + i));
            }
        }
        result = res;
    }
    return result;
};

