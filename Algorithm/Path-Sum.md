#### Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

#### Note: A leaf is a node with no children.

#### Example:

#### Given the below binary tree and sum = 22,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```
#### return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

#### 思路：使用“top-down”方法，从上到下进行遍历，每次将sum减去当前val，最后判定到叶子末尾是否刚好为零。

```
var hasPathSum = function(root, sum) {
    var a = false,
        b = false;

    if(root === null)
        return false;
    
    sum -= root.val;
    
    if(sum === 0 && root.left === null && root.right === null)
        return true;
    
    if(root.left !== null)
        a = hasPathSum(root.left, sum);
    if(root.right !== null)
        b = hasPathSum(root.right, sum);
    
    return a || b;
    
};
```

