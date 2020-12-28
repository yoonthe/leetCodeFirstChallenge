/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (dividend === 0) {
    return 0;
  }
  if (divisor === 1) {
    return dividend;
  }
  if (divisor === -1) {
    if (dividend === -2147483648) {
      return 2147483647;
    }
    return 0 - dividend;
  }
  const isNegative = dividend < 0;
  const isSameSymbol = (isNegative && divisor < 0) || (!isNegative && divisor > 0);
  const divisorArr = [isSameSymbol ? divisor : 0 - divisor];
  const size = [isSameSymbol ? 1 : -1];
  let current = 0;
  let remain = dividend;
  let d = divisorArr[0];
  let res = 0;
  if (isNegative) {
    while (remain <= d && -1073741824 <= d) {
      remain -= d;
      d += divisorArr[current];
      divisorArr.push(d);
      size.push(size[current] + size[current]);
      current += 1;
    }
    if (current === 0) {
      return remain <= d ? size[0] : 0;
    }
    res = size[current] + (isSameSymbol ? -1 : 1);
    current -= 1;
    d = divisorArr[current];
    while (current >= 0) {
      while (remain <= d) {
        remain -= d;
        res += size[current];
      }
      current --;
      d = divisorArr[current];
    }
  } else {
    while (remain >= d && 1073741823 >= d) {
      remain -= d;
      d += divisorArr[current];
      divisorArr.push(d);
      size.push(size[current] + size[current]);
      current += 1;
    }
    if (current === 0) {
      return remain >= d ? size[0] : 0;
    }
    res = size[current] + (isSameSymbol ? -1 : 1);
    current -= 1;
    d = divisorArr[current];
    while (current >= 0) {
      while (remain >= d) {
        remain -= d;
        res += size[current];
      }
      current--;
      d = divisorArr[current];
    }
  }
  return res;
};
// @lc code=end

