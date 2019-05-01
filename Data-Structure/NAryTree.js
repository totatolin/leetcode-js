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
	var arr = [],
		stack = [];
	stack.push(root);
	while (stack.length) {
		var current = stack.pop();
		arr.push(current.val);
		for (var i = current.length - 1; i >= 0; i--) {
			stack.push(current[i]);
		}
	}
	return arr;
}