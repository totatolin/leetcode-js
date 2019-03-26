#### Given a binary tree, find its maximum depth.

#### The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

#### Note: A leaf is a node with no children.

#### Example:

#### Given binary tree [3,9,20,null,null,15,7],

```
    3
   / \
  9  20
    /  \
   15   7
```
#### return its depth = 3.

#### 思路1:使用bfs或dfs均可以实现，遍历每层时进行该层深度的记录，代码略。

#### 思路2:使用递归进行树遍历的方式，参考中序遍历的思想。

```
var maxDepth = function(root) {
    var dep = 0;
    var num = 0;
    function temp (root) {
        if (root === null) {
            if (num > dep) {
                dep = num;
            }
            return
        }
        num++;
        temp(root.left);
        temp(root.right);
        num--;
    }
    temp(root);
    return dep;
};
```

