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
	// 从列表的特定位置移除一项
	this.removeAt = function (position) {
		// 检查越界值
		if (position > -1 && position < length) {
			let current = head,
				previous,
				index = 0;
			// 移除第一项
			if (position === 0) {
				head = current.next;
			} else {
				while (index++ < position) {
					previous = current;
					current = current.next;
				}
				// 将previous与current的下一项链接起来：跳过current，从而移除它
				previous.next = current.next;
			}
			length--;
			return current.element;
		} else {
			return null;
		}
	}
	// 获取链表数据
	this.getHead = function () {
		return head;
	}
}
let list = new LinkedList();
list.append(15);
list.append(10);