/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    const result = [];
    let roof = [root], current = [], next = [];
    while(roof.length > 0) {
        roof.forEach(t => {
            current.push(t.val);
            if (t.left !== null) {
                next.push(t.left);
            }
            if (t.right !== null) {
                next.push(t.right);
            }
        });
        result.push(current);
        current = [];
        roof = next;
        next = [];
    }
    return result;
};

