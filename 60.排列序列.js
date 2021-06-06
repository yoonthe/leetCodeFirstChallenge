/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let res = '', i = 1, r = 1, t, a = new Array(n).fill(1).map((n ,i) => n + i);
  k -= 1;
  while (i < n) {
    r *= i;
    i++;
  }
  while(i > 0) {
    t = Math.floor(k / r);
    res = res + a.splice(t, 1)[0];
    k -= t * r;
    r /= --i;
  }
  return res;
};
// @lc code=end

