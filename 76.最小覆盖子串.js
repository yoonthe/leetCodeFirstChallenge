k/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const resolveStr = {}, max = s.length;
  let i, j, k, res = '', len = 0;
  for(i = 0; i< t.length; i++) {
    if (t[i] in resolveStr) {
      resolveStr[t[i]]--;
    } else {
      resolveStr[t[i]] = -1;
      len--;
    }
  }
  // console.log(JSON.stringify(resolveStr));
  i = 0; j = t.length - 1;
  for (k = i; k <= j; k++) {
    if (s[k] in resolveStr) {
      resolveStr[s[k]]++;
      if (resolveStr[s[k]] === 0) {
        len++;
      }
    }
  }
  // console.log(JSON.stringify(resolveStr));
  if (len === 0) {
    return s.slice(i, j + 1);
  }
  while(1) {
    while (len < 0 && j < max) {
      j++;
      // push j
      if (s[j] in resolveStr) {
        resolveStr[s[j]]++;
        if(resolveStr[s[j]] === 0) {
          len++;
        }
      }
    }
    if (j >= max) {
      break;
    }
    while (len === 0 && i < max) {
      // got an answer, pop i
      if (s[i] in resolveStr) {
        resolveStr[s[i]]--;
        if (resolveStr[s[i]] < 0) {
          if (res.length === 0 || j - i + 1 < res.length) {
            // update answer
            res = s.slice(i, j + 1);
          }
          len--;
        }
      }
      i++;
    }
    if (i >= max) {
      break;
    }
  }
  return res;
};
// @lc code=end

