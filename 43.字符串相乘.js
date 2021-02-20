/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  let carry = 0;
  let res = '';
  const [ln, rn] = num1.length <= num2.length ? [num2, num1] : [num1, num2];
  let l = 0;
  let curr;
  const ll = ln.length;
  const rl = rn.length;
  while (l < ll) {
    curr = carry;
    for (let r = 0; r < rl && r <= l; r++) {
      curr += rn[rl - 1 - r] * ln[ll - 1 - l + r];
    }
    carry = Math.floor(curr / 10);
    res = (curr - carry * 10) + res;
    l += 1;
  }
  l = 1;
  while(l < rl) {
    curr = carry;
    for (let r = l; r < rl; r++) {
      curr += rn[rl - 1 - r] * ln[r - l];
    }
    carry = Math.floor(curr / 10);
    res = (curr - carry * 10) + res;
    l += 1;
  }
  if(carry > 0) {
    res = carry + res;
  }
  return res;
};
// @lc code=end

