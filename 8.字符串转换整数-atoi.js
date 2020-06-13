/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  let answer = 0;
  let positive = true;
  let i = 0;
  while (str[i] === ' ') {
    i++;
  }
  if (str[i] === '-' || str[i] === '+') {
    positive = str[i] !== '-';
    i++;
  }
  const charCode0 = '0'.charCodeAt(0);
  const charCode9 = '9'.charCodeAt(0);
  const positiveMax = Math.pow(2, 31) - 1;
  const negativeMax = -Math.pow(2, 31);
  while (i < str.length) {
    const charCode = str[i].charCodeAt(0);
    if (charCode < charCode0 || charCode > charCode9) {
      break;
    }
    answer = answer * 10 + charCode - charCode0;
    if (positive && answer > positiveMax) {
      return positiveMax;
    }
    if (!positive && 0 - answer < negativeMax) {
      return negativeMax;
    }
    i++;
  }
  return positive ? answer : 0 - answer;
};
// @lc code=end

