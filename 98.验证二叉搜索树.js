/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    const validate = (node, { min, max }) => {
        if (node !== null) {
            // console.log(node.val);
            if ((typeof min === 'undefined' || node.val > min) && (typeof max === 'undefined' || node.val < max)) {
                // 左子树必须小于val
                if (!validate(node.left, { min, max: node.val })) {
                    return false;
                }
                // 右子树必须小于val
                if (!validate(node.right, { min: node.val, max })) {
                    return false;
                }
                return true;
            }
            return false;
        }
        // console.log('[null]');
        return true;
    }
    return validate(root, {});
};

