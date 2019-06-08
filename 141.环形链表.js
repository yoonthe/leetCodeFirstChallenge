/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        // 1个或者空的 不存在环
        return false;
    }
    let size = 2, curr = head, next = head.next, i = 1;
    while(next !== null) {
        // 前面的和 next 一一比较
        curr = head;
        for (i = 1; i < size; i++ ) {
            if (curr === next) {
                return true;
            }
            curr = curr.next;
        }
        // 从 2 开始 放大环的大小
        size += 1;
        next = next.next;
    }
    return false;
};

