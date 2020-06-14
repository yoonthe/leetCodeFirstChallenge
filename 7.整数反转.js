/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let answer = 0;
  let n = x;
  while (n !== 0) {
    const c = n % 10;
    answer = answer * 10 + c;
    n = (n - c) / 10;
  }
  if (answer > Math.pow(2, 31) - 1 || answer < 0 - Math.pow(2, 31)) {
    return 0;
  }
  return answer;
};
// @lc code=end

