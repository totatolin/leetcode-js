
function BinarySearchTree () {
	var Node = function (key) {
		this.key = key;
		this.left = null;
		this.right = null;
	}
	this.root = null;
	this.insert = function (key) {
		var newNode = new Node(key);
		if (this.root === null) {
			this.root = newNode;
		} else {
			insertNode(this.root, newNode); 
		}
		function insertNode (node, newNode) {
			if (newNode.key < node.key) {
				if (node.left === null) {
					node.left = newNode;
				} else {
					insertNode(node.left, newNode);
				}
			} else {
				if (node.right === null) {
					node.right = newNode;
				} else {
					insertNode(node.right, newNode);
				}
			}
		}
	}
	// 中序遍历(递归)
	this.inOrderTraverse = function () {
		inOrderTraverseNode(this.root);
		function inOrderTraverseNode (node) {
			if (node !== null) {
				inOrderTraverseNode(node.left);
				console.log(node.key);
				inOrderTraverseNode(node.right);
			}
		}
	}
	// 先序遍历(递归)
	this.preOrderTraverse = function () {
		preOrderTraverseNode(this.root);
		function preOrderTraverseNode (node) {
			if (node !== null) {
				console.log(node.key);
				preOrderTraverseNode(node.left);
				preOrderTraverseNode(node.right);
			}
		}
	}
	// 后序遍历(递归)
	this.postOrderTraverse = function () {
		postOrderTraverseNode(this.root);
		function postOrderTraverseNode (node) {
			if (node !== null) {
				postOrderTraverseNode(node.left);
				postOrderTraverseNode(node.right);
				console.log(node.key);
			}
		}
	}
	// 中序遍历(非递归)
	this.inOrderTraverse2 = function () {
	    var stack = [];
		var cur = this.root;
		while (cur || stack.length !== 0) {
			while (cur !== null) {
				stack.push(cur);
				cur = cur.left;
			}
			if (stack.length) {
				var node = stack.pop();
				console.log(node.val);
				cur = node.right;
			}
		}
	}
	// 先序遍历(非递归)
	this.preOrderTraverse2 = function () {
	    var stack = [];
		var cur = this.root;
		while (cur || stack.length !== 0) {
			while (cur !== null) {
				stack.push(cur);
				console.log(cur.val);
				cur = cur.left;
			}
			if (stack.length) {
				var node = stack.pop();
				cur = node.right;
			}
		}
	}
}
var tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
console.log(tree);