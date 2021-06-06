/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head === null) {
    return head;
  }
  let len = 1, curr = head, i = 1, end;
  while(curr.next !== null) {
    len ++;
    curr = curr.next;
  }
  k = k % len;
  if (k === 0) {
    return head;
  }
  end = curr;
  curr = head;
  k = len - k;
  while (i < k) {
    i ++;
    curr = curr.next;
  }
  let res = curr.next;
  curr.next = null;
  end.next = head;
  return res;
};
// @lc code=end

