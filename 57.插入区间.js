/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
let i = 0, curr;
const nl = newInterval[0], nr = newInterval[1];
for (; i < intervals.length; i++) {
  curr = intervals[i];
  if (curr[1] >= nl) {
    if (curr[0] > nr) {
      intervals.splice(i, 0, newInterval);
      return intervals;
    }
    if (curr[1] >= nr) {
      curr[0] = Math.min(nl, curr[0]);
      return intervals;
    }
    curr[1] = nr;
    curr[0] = Math.min(nl, curr[0]);
    break;
  }
}
if (i === intervals.length) {
  intervals.push(newInterval);
  return intervals;
}
for (let j = i + 1; j < intervals.length; j++) {
  curr = intervals[j];
  if (curr[0] >  nr) {
    intervals[i][1] = Math.max(nr, intervals[j - 1][1]);
    intervals.splice(i + 1, j - i - 1);
    return intervals;
  }
}
intervals[i][1] = Math.max(nr, intervals[intervals.length - 1][1]);
intervals.splice(i + 1, intervals.length - i - 1);
return intervals;
};
// @lc code=end

