/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbols = 'MDCLXVI';
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let i = 0;
  let j = 0;
  let answer = 0;
  while (j < s.length) {
    if (s[j] !== symbols[i]) {
      if (s[j + 1] === symbols[i] && 'IXC'.includes(s[j])) {
        // -1
        answer -= values[s[j]];
        j++;
      } else {
        // 当前symbol结束
        i++;
      }
    } else {
      answer += values[symbols[i]];
      j++;
    }
  }
  return answer;
};
// @lc code=end

