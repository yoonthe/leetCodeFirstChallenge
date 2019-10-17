/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (34.43%)
 * Total Accepted:    47.8K
 * Total Submissions: 138.9K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const getMid = (arr, start, end) => {
    const length = end - start;
    if (length % 2 === 1) {
      const pos = start + (length - 1) / 2;
      // return [arr[pos], pos, 1];
      return arr[pos];
    }
    const pos = start + length / 2 - 1;
    // return [(arr[pos] + arr[pos + 1]) / 2, pos, 2];
    return (arr[pos] + arr[pos + 1]) / 2;
  }
  const getSize = length => length === 2 ? 1 : Math.floor((length - 1) / 2);
  // 保证 arr1.length > arr2.length
  const [arr1, arr2] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
  let arr1l = arr2l = 0, arr1r = arr1.length, arr2r = arr2.length, length = arr2.length;
  if (arr2r === 0) {
    return getMid(arr1, arr1l, arr1r);
  }
  // 对半查找
  while (length > 2) {
    const mid1 = getMid(arr1, arr1l, arr1r), mid2 = getMid(arr2, arr2l, arr2r);
    const cutSize = getSize(length);
    if (mid1 < mid2) {
      // 重新生成 arr
      arr1l = arr1l + cutSize;
      arr2r = arr2r - cutSize;
    } else {
      arr1r = arr1r - cutSize;
      arr2l = arr2l + cutSize;
    }
    length = arr2r - arr2l;
  }
  // console.log(arr2l, arr2r, arr1l, arr1r);
  const midl = arr2[arr2l], midr = arr2[arr2r - 1], arr = arr1.slice(arr1l, arr1r);
  // const single = (arr2r - arr2l + arr.length) % 2 === 1;
  const single = arr2r - arr2l === 1;
  const nan = fn => (a, b) => {
    if (typeof b === 'number' && !isNaN(b) && isFinite(b)) {
      return fn(a, b);
    }
    return a;
  }
  const max = nan(Math.max);
  const min = nan(Math.min);
  if (arr.length % 2 === 1) {
    const index = (arr.length - 1) / 2;
    const mid = arr[index];
    if (single) {
      const another = mid > midl ? max(midl, arr[index - 1]) : min(midl, arr[index + 1]);
      return (mid + another) / 2;
    }
    if (midl < mid && mid < midr) {
      return mid;
    }
    if (mid <= midl) {
      return min(midl, arr[index + 1]);
    }
    return max(midr, arr[index - 1]);
  } else {
    const index = arr.length / 2;
    const left = arr[index - 1], right = arr[index];
    if (single) {
      return right > midl ? Math.max(left, midl) : right;
    }

    if (right <= midl) {
      // left right midl midr
      return (right + min(midl, arr[index + 1])) / 2;
    }
    if (midr <= left) {
      // midl midr left right
      return (left + max(midr, arr[index - 2])) / 2;
    }
    return (Math.max(left, midl) + Math.min(right, midr)) / 2;
  }
};

// const d = (...args) => {
//   const t = findMedianSortedArrays(...args);
//   console.log('--------- input  -----------');
//   console.log(...args);
//   console.log('--------- output -----------');
//   console.log(t);
// }

// d([1, 3], [2]);

// d([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);

// d([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10]);

// d([1, 3, 5, 7, 9], [200, 250, 300]);

// d([200, 201, 202], [1, 31, 501, 701]);

// d([200, 201, 202], [1, 31, 501, 701, 1301, 1901, 2201, 3201, 4501, 5501]);

// d([200], [1, 31, 501, 701, 1301, 1901, 2201, 3201, 4501, 5501]);

// d([1, 2, 3, 200, 300], [10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
// d([1, 2], [-1, 3]);
// d([1, 2], [3, 4]);
// 3, 200, 300 | 12, 13, 14, 15
// 3, 200 | 13, 14, 15
// 3 | 14, 15
// 14
