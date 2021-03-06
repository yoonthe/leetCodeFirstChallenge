/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
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
    if (answer > Math.pow(2, 31) - 1) {
      return 0;
    }
    return answer;
  };
  if (reverse(x) === x) {
    return true;
  }
  return false;
};
// @lc code=end

