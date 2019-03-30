#### Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

#### According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

#### Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

#### Example 1:

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```
#### Example 2:

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
```
#### 思路：使用递归来进行'bottom-up'处理。共有三种情况，p和q分别在节点两边的情况，p和q同时在左边的情况，还有同时在右边的情况。在两边时返回他们的上一层共同根节点，在一侧时，返回最新遍历到的节点。

```
const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (!left) return right
    if (!right) return left
    return root
};
```

