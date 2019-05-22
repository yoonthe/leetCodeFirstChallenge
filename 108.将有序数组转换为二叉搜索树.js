/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    // 左倾做法
    // const mid = Math.floor(nums.length / 2);
    // 右倾做法
    const mid = Math.floor((nums.length - 1) / 2);
    const node = new TreeNode(nums[mid]);
      node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1));
    return node;
};
// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }
// console.log(sortedArrayToBST([-10,-3,0,5,9]));
