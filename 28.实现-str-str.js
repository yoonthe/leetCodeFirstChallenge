/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // return haystack.indexOf(needle);
  if (needle.length === 0) {
    return 0;
  }
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // 判断是否一致
    for (let j = 0; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
      if (j === needle.length - 1) {
        return i;
      }
    }
  }
  return  -1;
}
// @lc code=end

