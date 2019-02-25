#### Remove all elements from a linked list of integers that have value val.

```
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
```
#### 思路：设置前置变量prev和当前变量current，如果当前的val等于参数val，则删除该节点。但要注意val为开头或者结尾时候的边界情况。

```
var removeElements = function(head, val) {
    
    var prev = null,
        current = head;
    
    while(current !== null){
        
        if(current.val === val){
            if(prev === null){
                head = current.next;
            }else{
                prev.next = current.next;
            }
        }else{
            prev = current;
        }
        
        current = current.next;
        
    }
    
    return head;
};
```

