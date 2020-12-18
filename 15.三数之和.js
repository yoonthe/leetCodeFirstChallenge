/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (21.75%)
 * Total Accepted:    47K
 * Total Submissions: 215.8K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 大数据量下 map 性能高于 {}
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  const map = new Map();
  nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));
  // 3个一样的数 一定是0
  const res = (map.get(0) >= 3 ? [[0, 0, 0]] : []), keys = Array.from(map.keys()).sort((a, b) => a - b);
  let n, t, zeroIndex;
  // 两个一样的数
  if (keys.length >= 2) {
    keys.forEach((key, index) => {
      if (key === 0) {
        zeroIndex = index;
        return;
      }
      if (key > 0 && typeof zeroIndex === 'undefined') {
        zeroIndex = index;
      }
      n = map.get(key);
      if (n >= 2) {
        t = 0 - 2 * key;
        if (typeof map.get(t) !== 'undefined') {
          res.push([key, key, t]);
        }
      }
    });
  }
  // 三个数都不一样
  if (keys.length >= 3) {
    // 从小于0的里面选一个
    // 保证 i 是最小的, j 是最大的
    let i = zeroIndex - 1, j = zeroIndex, ki = keys[i], kj = keys[j], rightStart = j;
    t = 0 - ki - kj;
    while (i >= 0) {
      if (t >= kj) {
        j++;
        kj = keys[j];
        t = 0 - ki - kj;
        while (t >= kj) {
          j++;
          kj = keys[j];
          t = 0 - ki - kj;
        }
        rightStart = j;
      }
      if (t <= ki || j === keys.length) {
        i -= 1;
        ki = keys[i];
        j = rightStart;
        kj = keys[j];
        t = 0 - ki - kj;
        while (t <= ki) {
          i -= 1;
          ki = keys[i];
          t = 0 - ki - kj;
        }
        continue;
      }
      if (typeof map.get(t) !== 'undefined') {
        res.push([ki, t, kj]);
      }
      j += 1;
      kj = keys[j];
      t = 0 - ki - kj;
    }
  }
  return res;
};
