/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1;
  while(i >= 0 && digits[i] === 9) {
    digits[i] = 0;
    i--;
  }
  if (i === -1) {
    // 9 ... 9
    digits.unshift(1);
    return digits;
  }
  digits[i] = digits[i] + 1;
  return digits;
};
// @lc code=end

