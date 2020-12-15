/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const len = nums.length;
  const sortNums = nums.sort((a, b) => a - b);
  // console.log(sortNums);
  const t = target / 3;
  let i = 0;
  for (let index = len - 2; index >= 0 ; index--) {
    if (sortNums[index] < t) {
      i = index;
      break;
    }
  }
  let j = i + 1;
  let res = Infinity;
  let step = Infinity;
  while(1) {
    const mv = target - sortNums[i] - sortNums[j];
    // console.log(sortNums[i], sortNums[j], mv);
    if (i !== j - 1) {
      let x = i + 1;
      for (; x < j; x += 1) {
        if (sortNums[x] >= mv || x === j - 1) {
          break;
        }
      }
      const p = (x === i + 1 || (sortNums[x] - mv) < (mv - sortNums[x - 1])) ? x : x - 1;
      // console.log(sortNums[p]);
      step = target - mv + sortNums[p];
      if (step === target) {
        return step;
      }
      if (Math.abs(target - step) < Math.abs(target - res)) {
        res = step;
      }
    }
    if (i === 0 && j === len - 1) {
      break;
    } else if (j === len - 1) {
      i -= 1;
    } else if (i === 0) {
      j += 1;
    } else if (mv < sortNums[i]) {
      i -= 1;
    } else if (mv > sortNums[j]) {
      j += 1;
    } else if (Math.abs(target - step + sortNums[i] - sortNums[i - 1]) < 
      Math.abs(target - step - sortNums[j + 1] + sortNums[j])) {
      i -= 1;
    } else {
      j += 1;
    }
  }
  return res;
};
// @lc code=end