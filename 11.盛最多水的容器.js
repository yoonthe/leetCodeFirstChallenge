/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0, j = height.length - 1;
  let dir;
  let maxArea = 0;
  while (i < j) {
    // console.log(i, j);
    dir = height[i] < height[j];
    maxArea = Math.max(maxArea, (j - i) * (dir ? height[i] : height[j]));
    if (dir) {
      // i
      let t = i + 1;
      while(t < j && height[t] <= height[i]) {
        t++;
      }
      i = t;
    } else {
      // j
      let t = j - 1;
      while(t > i && height[t] <= height[j]) {
        t--;
      }
      j = t;
    }
  }
  return maxArea;
};
// @lc code=end

