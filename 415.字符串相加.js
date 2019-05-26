/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const length = Math.max(num1.length, num2.length);
    let carry = 0;
    let result = '';
    for (let i = 1; i <=length; i++) {
        const sum = Number(num1[num1.length - i] || 0) + Number(num2[num2.length - i] || 0) + carry;
        result = sum % 10 + result;
        carry = Math.floor(sum / 10);
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
};

