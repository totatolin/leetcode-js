#### You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```
#### Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

#### Initially, all next pointers are set to NULL.

```
Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":{"$id":"6","left":null,"next":null,"right":null,"val":7},"right":null,"val":6},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"7","left":{"$ref":"5"},"next":null,"right":{"$ref":"6"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"7"},"val":1}

Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
```
#### 思路：使用广度优先算法，对每层进行遍历时，将每层逐个出队列，前一项的指针指向下一项，最后一项为null。

```
var connect = function(root) {
    if (!root) { return; }
    
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let level = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node) { queue.push(node.left); }
            if (node) { queue.push(node.right); }
            level.push(node);
        }
        level.push(null);
        for (let i = 0; i < level.length - 1; i++) {
            if (level[i]) {
                level[i].next = level[i + 1];   
            }
        }
    }
};
```

