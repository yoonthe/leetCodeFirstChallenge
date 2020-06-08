/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (root === null) {
      return [];
    }
    const leftArr = rightSideView(root.left), rightArr = rightSideView(root.right);
    for (let i = 0; i < rightArr.length; i++) {
      leftArr[i] = rightArr[i];
    }
    return [root.val, ...leftArr];
};

