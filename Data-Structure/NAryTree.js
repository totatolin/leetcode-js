// N叉树的遍历处理，主要有递归和非递归方式，没有中序遍历

// 先序遍历（递归）
function preOrderTraverse (root) {
	if (!root) return [];
	var arr = [];
	function preOrder (node) {
		if (!node.children) return;
		arr.push(node.val);
		for (var i = 0; i < node.children.length; i++) {
			preOrder(node.children[i]);
		}
	}
	preOrder(root);
	return arr;
}

// 先序遍历（非递归）
function preOrderTraverse2 (root) {
	if (!root) return [];
	var arr = [],
		stack = [];
	stack.push(root);
	while (stack.length) {
		var current = stack.pop();
		arr.push(current.val);
		for (var i = current.children.length - 1; i >= 0; i--) {
			stack.push(current.children[i]);
		}
	}
	return arr;
}

// 后序遍历（递归）
function postOrderTraverse (root) {
	if (!root) return [];
	var arr = [];
	function postOrder (node) {
		if (node === null) return;
		for (var i = 0; i < node.children.length; i++) {
			postOrder(node.children[i]);
		}
		arr.push(node.val);
	}
	postOrder(root);
	return arr;
}

// 后序遍历（非递归），后序遍历可以看作是镜像的先序遍历再颠倒位置
function postOrderTraverse2 (root) {
	if (!root) return [];
	var arr = [],
		stack = [];
	stack.push(root);
	while (stack.length) {
		var current = stack.pop();
		arr.push(current.val);
		for (var i = 0; i < current.children.length; i++) {
			stack.push(current.children[i]);
		}
	}
	return arr.reverse();
}

// 层级遍历（递归）
function levelOrderTraverse (root) {
	if (!root) return [];
	var arr = [];
	function levelOrder (node, level) {
		if (!node) return;
		if (arr.length <= level) {
			arr.push([]);
			arr[level].push(node.val);
			for (var i = 0; i < node.children.length; i++) {
				levelOrder(node.children[i], level + 1);
			}
		}
	}
	levelOrder(root, 0);
	return arr;
}

// 层级遍历（非递归）
function levelOrderTraverse2 (root) {
	if (!root) return [];
	var queue = [],
		arr = [];
	queue.push(root);
	root.level = 0;
	while (queue.length) {
		var current = queue.shift();
		if (arr.length <= current.level) {
			arr.push([]);
		}
		arr[current.level].push(current.val);
		for (var i = 0; i < current.children.length; i++) {
			current.children[i].level = current.level + 1;
			queue.push(current.children[i]);
		}
	}
	return arr;
}