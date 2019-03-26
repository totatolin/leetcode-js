#### Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

#### For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
#### But the following [1,2,2,null,3,null,3] is not:

```
    1
   / \
  2   2
   \   \
   3    3
```
#### Note:
#### Bonus points if you could solve it both recursively and iteratively.

#### 思路：用递归来解此题。

```
var isSymmetric = function(root) {
    if (root === null) return true;
    function temp (l, r) {
        if (l === null && r === null) return true;
        if (l === null || r === null) return false;
        if (l.val !== r.val) return false;
        return temp(l.left, r.right) && temp(l.right, r.left);
    }
    return temp(root.left, root.right);
};
```

