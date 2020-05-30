/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let res = 0;
    for (let i = 0; i < hammingWeight.bits.length; i++) {
        res += ((n & hammingWeight.bits[i]) === 0) ? 0 : 1;
    }
    return res;
};
hammingWeight.bits = [1];
for (let i = 1; i < 32; i++) {
    hammingWeight.bits.push(hammingWeight.bits[i - 1] * 2);
}

