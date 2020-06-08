/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  const euclidean = (a, b) => {
    let large = Math.max(a), small = Math.min(b);
    while (small > 1) {
      const t = large % small;
      if (t === 0) {
        return small;
      }
      large = small;
      small = t;
    }
    return small;
  };
  if (k > 0 && len > 0) {
    const s = k % len;
    if (s > 0) {
      const period = euclidean(s, len);
      let temp, i;
      for (let t = 0; t < period; t++) {
        temp = nums[t], i = len - s + t;
        while (i > t) {
          nums[(i + s) % len] = nums[i];
          i = i - s;
          if (i < 0) {
            i += len;
          }
        }
        nums[t + s] = temp;
      }
    }
  }
};
// const nums = [-1, -100, 3, 99];
// rotate(nums, 2);
// console.log(nums);

