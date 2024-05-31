/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length <  2) {
    return [nums];
  }
  const count = {};
  nums.forEach(num => count[num] = (count[num] || 0) + 1);
  const ns = Object.keys(count).sort((a, b) => count[b] - count[a]).map(a => Number(a));
  console.log(ns, count);
  const res = [], curr = new Array(count[ns[0]]).fill(ns[0]), stack = [];
  let i = 1;
  while (i > 0) {
    
  }
};
// @lc code=end

permuteUnique([1,2,1,3,1,2,3,3]);