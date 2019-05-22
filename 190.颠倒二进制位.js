/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // 1. number -> string -> array -> reverse
    // const reverse = Array.from(n.toString(2)).reverse();
    // while (reverse.length < 32) {
    //     reverse.push('0');
    // }
    // return parseInt(reverse.join(''), 2);
    // 2. 按位加
    const max = Math.pow(2, 31);
    let bit = 1;
    let res = 0;
    for (; bit < max; bit *= 2) {
        let t = bit & n;
        if (t === 0) {
            continue;
        }
        res += max / t;
    }
    res += (bit & n) ? 1 : 0;
    return res;
};

