#### Given a linked list, determine if it has a cycle in it.

#### To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```
#### 思路：使用快慢指针的思想，慢指针一次移动一位，快指针一次移动两位，如果该链表是循环链表的话，则快慢指针必会相遇。

```
var hasCycle = function(head) {
    if( head == null || head.next == null ){
		return false;
	}
    var slow = head; //slow pointer moves one step forward
    var fast = head; //fast pointer moves two steps forward
    while( true ){
    	//check if we reached the end of the list, --> not cyclic
    	if( fast.next == null || fast.next.next == null ){
    		return false;
    	}
    	slow = slow.next;
    	fast = fast.next.next;
    	//because fast moves as twice as fast, if it is cyclic, 
    	//it must reach slow at some point
    	if( fast === slow ){
    		return true;
    	}
    }
};
```

