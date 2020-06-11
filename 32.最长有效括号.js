/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (s.length < 2) {
    return 0;
  }
  const dp = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      const p = i - dp[i - 1] - 1;
      if (s[p] === '(') {
        dp[i] = dp[i - 1] + 2;
        if (p > 0) {
          dp[i] += dp[p - 1];
        }
      }
    }
  }
  // console.log(dp);
  return Math.max.apply(null, dp);
};
// @lc code=end

