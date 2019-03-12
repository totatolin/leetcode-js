#### Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
#### 思路：处理两个链表l1和l2，比较两个当前值的大小，取当前变量cur，根据两个链表最小值设置新的节点赋值给cur。

```
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode();
    let cur = res;
    while(l1 && l2){
        if(l1.val <= l2.val){
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
            cur = cur.next;
        }
        else {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
            cur = cur.next;
        }
    }
    cur.next = l1 || l2;
    return res.next;
};
```

