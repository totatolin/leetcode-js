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