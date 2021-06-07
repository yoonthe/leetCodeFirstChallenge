/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const paths = [];
  path.split('/').forEach(str => {
    if (str.length > 0 && str !== '.') {
      if (str === '..') {
        paths.pop();
      } else {
        paths.push(str);
      }
    }
  });
  return '/' + paths.join('/');
};
// @lc code=end

