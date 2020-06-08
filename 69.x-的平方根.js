/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // return Math.floor(Math.sqrt(x));
    if (x < 4) {
        return ([0, 1, 1, 1])[x];
    }
    let t = 4, r = 2;
    while(t <= x) {
        t *= 4;
        r *= 2;
    }
    t /= 4, r /= 2;
    while(t <= x) {
        if (t===x) {
            return r;
        }
        r += 1;
        t = r * r;
    }
    return r - 1;
};

