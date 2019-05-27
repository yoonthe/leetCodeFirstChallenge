/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = null;
    let current = null;
    while(l1 !== null || l2 !== null) {
        const next = l1 && (l2 === null || l1.val < l2.val) ? l1 : l2;
        if (current === null) {
            current = next;
            res = current;
        } else {
            current.next = next;
            current = next;
        }
        if (next === l1) {
            l1 = l1.next;
        } else {
            l2 = l2.next;
        }
    }
    return res;
};

