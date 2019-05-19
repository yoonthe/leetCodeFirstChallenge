/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (22.30%)
 * Total Accepted:    14.1K
 * Total Submissions: 62.7K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 * 
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 * 
 * 
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 * 
 * 说明:
 * 
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 * 
 * 
 * 示例 4:
 * 
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 * 
 * 
 * 示例 5:
 * 
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }
  let i = 0, j = 0, token;
  const getToken = () => {
    const token = {
      char: p[j],
      repeat: false,
    };
    if (p[j + 1] === '*') {
      j += 2;
      token.repeat = true;
    } else {
      j += 1;
    }
    return token;
  };
  const match = (char, match) => (match === '.' && typeof char !== 'undefined') || char === match;
  while(j < p.length) {
    token = getToken();
    if (token.repeat) {
      // 计算能匹配的最大范围
      if(token.char === '.') {
        // 从 0 -> s.length开始遍历情况
        for (let t = i; t <= s.length; t++) {
          const match = isMatch(s.slice(t), p.slice(j));
          if (match) {
            return true;
          }
        }
      } else {
        // 从 最大值 -> 0开始遍历情况
        let t = i;
        while(s[t] === token.char) {
          t += 1;
        }
        for(; t >= i; t--) {
          const match = isMatch(s.slice(t), p.slice(j));
          if (match) {
            return true;
          }
        }
      }
      return false;
    }
    // 匹配当前字符
    if(match(s[i], token.char)) {
      i += 1;
    } else {
      return false;
    }
  }
  return i === s.length;
};

// console.log(isMatch("", "")); // true
// console.log(isMatch("", "a")); // false
// console.log(isMatch("", "a*")); // true
// console.log(isMatch("a", "")); // false
// console.log(isMatch("aa", "a")); // false
// console.log(isMatch("aa", "a*")); // true
// console.log(isMatch("ab", ".*")); // true
// console.log(isMatch("aab", "c*a*b")); // true
// console.log(isMatch("aab", "c*a*b*")); // true
// console.log(isMatch("aab", "ca*b*")); // false
// console.log(isMatch("mississippi", "mis*is*p*.")); // false
// console.log(isMatch("mississippi", "mis*is*ip*.")); // true
console.log(isMatch("a",".*..a*"));
// "caabccd"
// ".*a*abc*" .*a*bc*d

