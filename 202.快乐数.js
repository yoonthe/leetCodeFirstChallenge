/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */

 // 1,7,10, 19, 68
var isHappy = function(n) {
    if (n <= 10) {
        return n === 1|| n === 7 || n === 10;
    }
    let res = 0;
    let num = n;
    while( num > 9) {
        const curr = num % 10;
        res += curr * curr;
        num = (num - curr) / 10;
    }
    return isHappy(res + num * num)
};

