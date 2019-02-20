
#### Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

#### To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

#### Note: Do not modify the linked list.

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```
#### 思路：使用快慢指针来实现，通过快慢指针可以判断是否为循环链表，并且：1、快慢指针一定在慢指针第一圈内相遇；2、快指针走的总距离是慢指针总距离的一倍。设链表的长度是k，进去循环前的距离是m，相遇点是进去循环后的第n点。当快慢指针相遇时，快指针移动的距离为k+n，慢指针移动的距离为m+n。所以k+n=2(m+n)，解得k-m-n=m，k-m-n的距离为慢指针回到循环开始点的距离，m为从头到循环开始点的距离，两者相等。所以将快指针再置为初始点重新走，快慢指针必定会在循环开始点相遇，此时的节点便是循环的开始点。

```
function detectCycle(head) {
  if (!head || !head.next || !head.next.next) return null

  let slow = head.next
  let fast = head.next.next

  while (slow !== fast) {
    slow = slow.next
    if (!fast.next || !fast.next.next) return null
    fast = fast.next.next
  }

  fast = head

  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return fast
}
```

