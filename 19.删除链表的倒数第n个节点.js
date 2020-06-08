/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (n < 1) {
    return head;
  }
  let curr = head, target = head, t = n;
  while(curr !== null) {
    curr = curr.next;
    if (t > -1) {
      t -= 1;
    } else {
      target = target.next;
    }
  }
  if (t === 0) {
    // 说明n === list.length
    return head.next;
  }
  target.next = target.next.next;
  return head;
};

