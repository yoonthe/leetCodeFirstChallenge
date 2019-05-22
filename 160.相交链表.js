/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let aLength = bLength = 0, pA = headA, pB = headB;
    // 统计 a, b的长度
    while(pA !== null) {
        aLength += 1;
        pA = pA.next;
    }
    while(pB !== null) {
        bLength += 1;
        pB = pB.next;
    }
    // 将两个链表设置为等长
    pA = headA, pB = headB;
    while (aLength > bLength) {
        pA = pA.next;
        aLength -= 1;
    }
    while (bLength > aLength) {
        pB = pB.next;
        bLength -= 1;
    }
    // 开始直接比对
    while(pA !== null) {
        if (pA === pB) {
            return pA;
        }
        pA = pA.next;
        pB = pB.next;
    }
    return null;
};

