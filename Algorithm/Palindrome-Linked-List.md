#### Given a singly linked list, determine if it is a palindrome.

```
Input: 1->2
Output: false
```

```
Input: 1->2->2->1
Output: true
```
#### 思路：处理链表的回文，可以使用快慢指针，当快指针走到头时，慢指针走到了一半，取出此时的慢指针，并将新的链表进行倒序排列，比较新旧链表是否每一项都相等。

```
function reverse (head) {
   let newHead = null;
    while (head !== null) {
        const next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }
    return newHead;
}
var isPalindrome = function(head) {
    // reverse half;
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let half = reverse(slow);
    while (head !== null && half !== null) {
        if (head.val !== half.val) {
            return false;
        } 
        head = head.next;
        half = half.next;
    }
    return true;
};
```

