/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        const sum =  numbers[i] + numbers[j];
        if (sum === target) {
          return [i + 1, j + 1];
        }
        if (sum > target) {
          break;
        }
      }
    }
    return [];
};

