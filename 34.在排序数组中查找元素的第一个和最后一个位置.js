/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  if (nums.length === 0 || nums[0] > target || nums[end] < target) {
    return [-1, -1];
  }
  let mid = Math.floor((start + end)/ 2);
  while (true) {
    if (start >= end - 1) {
      const l = nums[start] === target ? start : end;
      const r = nums[end] === target ? end : start;
      return l > r ? [-1, -1] : [l, r];
    } else if (nums[mid] === target) {
      const getMid1 = (s, e) => {
        let start2 = s;
        let end2 = e;
        let mid2 = Math.ceil((start2 + end2)/ 2);
        while(mid2 < e && mid2 > s) {
          if (nums[mid2] === target) {
            if (nums[mid2 - 1] < target) {
              return mid2;
            }
            end2 = mid2;
          } else {
            start2 = mid2;
          }
          mid2 = Math.ceil((start2 + end2)/ 2)
        }
      }
      const getMid2 = (s, e) => {
        let start2 = s;
        let end2 = e;
        let mid2 = Math.floor((start2 + end2)/ 2);
        while(mid2 < e && mid2 > s) {
          if (nums[mid2] === target) {
            if (nums[mid2 + 1] > target) {
              return mid2;
            }
            start2 = mid2;
          } else {
            end2 = mid2;
          }
          mid2 = Math.floor((start2 + end2)/ 2)
        }
      }
      const l = nums[start] === target ? start : (getMid1(start, mid) || mid);
      const r = nums[end] === target ? end : (getMid2(mid, end) || mid); 
      return [l, r];
    } else if (nums[mid] < target) {
      start = mid;
    } else if (nums[mid] > target) {
      end = mid;
    }
    mid = Math.floor((start + end)/ 2);
  }
};
// @lc code=end

