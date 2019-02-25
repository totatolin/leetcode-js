#### Reverse a singly linked list.

```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```
#### 思路：设置current变量，用来保留当前链表的指针，设置一个虚拟节点dummy，用来存储新的链表。每次循环取出头节点，与dummy进行相应的拼接，最后再将current赋值给head（由于此时head.next为null，通过current赋值将新的指针传给head，用来进行下一轮循环）

```
var reverseList = function(head) {
    var current = head;
    var dummy = new ListNode(null);
    while (current !== null) {
    	current = current.next;
		head.next = dummy.next;
		dummy.next = head;
    	head = current;
    }
    return dummy.next;
};
```

