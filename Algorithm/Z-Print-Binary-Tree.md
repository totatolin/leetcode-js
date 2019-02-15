#### 非leetcode原题，在别处收录

#### 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印。

#### 思路：用bfs算法，逐层入队列，逐层遍历，初始设置flag为true表示输出结果的数组为从尾部进入，false代表数组从头部进入。

```
function BinaryTreeTraversal (root) {
	var result = [], // 返回值
		queue = [], // 队列
		flag = true; // 判断遍历方向
	queue.push(root);
	while (queue.length !== 0) {
		var len = queue.length;
		var res = []; // 一次遍历的输出值
		for (var i = 0; i < len; i++) {
			var head = queue.shift();
			if (flag) { // 正向遍历从数组尾放入
				res.push(head.val);
			} else { // 反向遍历从数组头放入
				res.unshift(head.val);
			}
			if (head.left !== null) {
				queue.push(head.left);
			}
			if (head.right !== null) {
				queue.push(head.right);
			}
		}
		flag = !flag;
		result.push(res);
	}
	return result;
}
function Tree (val) {
	this.val = val;
	this.left = null;
	this.right = null;
}
var root = new Tree(1);
var a = new Tree(2);
var b = new Tree(3);
var c = new Tree(4);
var d = new Tree(5);
var e = new Tree(6);
var f = new Tree(7);
a.left = c;
a.right = d;
b.left = e;
b.right = f;
root.left = a;
root.right = b;
console.log(root);

console.log(BinaryTreeTraversal(root));
```

