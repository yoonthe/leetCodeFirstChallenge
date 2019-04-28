/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (58.44%)
 * Total Accepted:    35K
 * Total Submissions: 59.8K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}sz
 */
var majorityElement = function(nums) {
    // 不排序使用map 时间 o(n), 空间 o(n)
    const map = {};
    nums.forEach(n => {
      map[n] = (map[n] || 0) + 1;
    });
    let majority;
    let majorityTime = 0;
    let time;
    Object.keys(map).forEach(n => {
      time = map[n];
      if (time > majorityTime) {
        majority = n;
        majorityTime = time;
      }
    });
    return majority;
};

