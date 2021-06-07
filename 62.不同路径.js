/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let total = m + n - 2;
  let step = Math.min(m, n) - 1;
  let res = 1;
  for (; step > 0; step--) {
    res = res * total / step;
    total--;
  }
  return res;
};
// @lc code=end

