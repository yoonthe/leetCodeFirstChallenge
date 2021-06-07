/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let ret = false, res = '';
  let ai = a.length - 1, bi = b.length - 1, i = Math.max(ai, bi);
  while (i >= 0) {
    if (a[ai] === '1') {
      if (b[bi] === '1') {
        res = (ret ? '1' : '0') + res;
        ret = true;
      } else {
        res = (ret ? '0' : '1') + res;
      }
    } else {
      if (b[bi] === '1') {
        res = (ret ? '0' : '1') + res;
      } else {
        res = (ret ? '1' : '0') + res;
        ret = false;
      }
    }
    i--;
    ai--;
    bi--;
  }
  return ret ? '1' + res : res;
};
// @lc code=end

