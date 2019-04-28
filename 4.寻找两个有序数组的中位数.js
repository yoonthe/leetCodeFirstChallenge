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
  const getMid = (arr, length) => {
      if (length % 2 === 1) {
          return arr[(length - 1) / 2];
      }
      const pos = length / 2;
      return (arr[pos - 1] + arr[pos]) / 2;
  }
  const getSize = length => length === 2 ? 1 : Math.floor((length - 1) / 2);
  if (nums1.length === 0) {
      return getMid(nums2, nums2.length)[2];
  }
  if (nums2.length === 0) {
      return getMid(nums1, nums1.length)[2];
  }
  // 对半查找
  let arr1;
  let arr2;
  if (nums1.length > nums2.length) {
      arr1 = nums1, arr2 = nums2;
  } else {
      arr1 = nums2, arr2 = nums1;
  }
  while (arr2.length > 1) {
      const length1 = arr1.length, length2 = arr2.length;
      const mid1 = getMid(arr1, length1), mid2 = getMid(arr2, length2);
      const sliceSize1 = getSize(length1), sliceSize2 = getSize(length2);
      if (mid1 < mid2) {
          // 重新生成 arr
          arr1 = arr1.slice(sliceSize1);
          arr2 = arr2.slice(0, length2 - sliceSize2);
      } else {
          arr1 = arr1.slice(0, length1 - sliceSize1);
          arr2 = arr2.slice(sliceSize2);
      }
  }
  console.log(arr1, arr2);
};

findMedianSortedArrays([1, 3], [2]);

findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);

findMedianSortedArrays([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10]);

findMedianSortedArrays([1, 3, 5, 7, 9], [200, 250, 300]);

findMedianSortedArrays([200, 201, 202], [1, 31, 501, 701]);

findMedianSortedArrays([200, 201, 202], [1, 31, 501,   , 1301, 1901, 2201, 3201, 4501, 5501]);

