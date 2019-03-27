#### Given a linked list, rotate the list to the right by k places, where k is non-negative.

```
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
```

```
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
```
#### 思路：使用快慢指针来实现，快指针先提前走k步，然后快慢指针一起走，直到快指针走到头时，此时的慢指针指向的即为要旋转的节点，然后将快慢指针节点进行旋转。

```
const rotateRight = (head, k) => {
    if (head === null) return head
    
    let p1 = head
    let p2 = head
    
    for (let i = 0; i < k; i++) {
        p2 = (p2.next === null) ? head : p2.next
    }
    
    while (p2.next !== null) {
        p1 = p1.next
        p2 = p2.next
    }
    
    p2.next = head
    const newHead = p1.next
    p1.next = null
    return newHead
}
```

