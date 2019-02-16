function LinkedList () {
	let Node = function (element) {
		this.element = element;
		this.next = null;
	}
	let length = 0;
	let head = null;
	// 向列表尾部添加新元素
	this.append = function (element) {
		let node = new Node(element),
			current;
		if (head === null) {
			head = node;
		} else {
			current = head;

			// 循环列表，直到找到最后一项
			while (current.next) {
				current = current.next;
			}

			// 找到最后一项，将其next赋值为node，建立链接
			current.next = node;
		}
		length++;
	}
	// 获取链表数据
	this.getHead = function () {
		return head;
	}
}
let list = new LinkedList();
list.append(15);
list.append(10);
