#### Given a binary tree, return the inorder traversal of its nodes' values.

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
```
#### 思路：使用栈来实现二叉树的中序遍历。

```
var inorderTraversal = function(root) {
    var stack = [],
        res = [];
    
    while(true){
        if(root !== null){
            stack.push(root);
            root = root.left;
        }else{
            if(stack.length === 0) break;
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    
    return res;
};
```

