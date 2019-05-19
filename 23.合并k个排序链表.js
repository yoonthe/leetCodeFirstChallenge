/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */
/**
 * Definition for singly-linked lists.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let res = null;
    let current;
    // 先校验一下是否都是null
    if (lists.length === 0) {
        return null;
    }
    for (let i = lists.length; i >=0; i--) {
        if (lists[i] === null) {
            lists.splice(i, 1);
        }
    }
    const minIndex = lists => {
        let m = 0;
        lists.forEach((n, index) => {
            if (n.val < lists[m].val) {
                m = index;
            }
        });
        return m;
    }
    while(lists.length > 0) {
        const min = minIndex(lists);
        if (res === null) {
            res = current = lists[min];
        } else {
            current.next = lists[min];
            current = lists[min];
        }
        if (current.next === null) {
            lists.splice(min, 1);
        } else {
            lists[min] = current.next;
        }
    }
    return res;
};
