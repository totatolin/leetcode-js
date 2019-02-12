#### You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

#### The lock initially starts at '0000', a string representing the state of the 4 wheels.

#### You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

#### Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.


```
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation:
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes the dead end "0102".

```

```
Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation:
We can turn the last wheel in reverse to move from "0000" -> "0009".

```

```
Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation:
We can't reach the target without getting stuck.
```

```
Input: deadends = ["0000"], target = "8888"
Output: -1
```
#### 思路：使用bfs算法，对于每一个节点，它共有8种情况（每一位均可以加一或减一）。deadends可以理解为已经走过的节点，遇到该节点则不再继续往下走。使用广度优先，将每个节点的所有情况展开，直到找到target为止，记录此时的步数。
```
function getNexts (data) {
	var result = [];
	for (var i = 0; i < 4; i++) {
		var str = data[i];
		var str1 = parseInt(str) === 9 ? 0 : parseInt(str) + 1;
		var str2 = parseInt(str) === 0 ? 9 : parseInt(str) - 1;
		var item1 = data.substring(0, i) + str1 + data.substring(i+1, 4);
		var item2 = data.substring(0, i) + str2 + data.substring(i+1, 4);
		result.push(item1);
		result.push(item2);
	}
	return result;
}
function openLock (deadends, target) {
	var used = {},
		queue = [],
		n = 0;
	used['0000'] = '0000';
	for (var i = 0; i < deadends.length; i++) {
	    if (deadends[i] === '0000') {
	        return -1;
	    }
		used[deadends[i]] = deadends[i];
	}
	queue.push('0000');
	while (queue.length !== 0) {
		var len = queue.length;
		for (var i = 0; i < len; i++) {
			var head = queue.shift();
			if (head === target) {
				return n;
			}
			var nexts = getNexts(head);
			for (var j = 0; j < 8; j++) {
				if (!used[nexts[j]]) {
					queue.push(nexts[j]);
					used[[nexts[j]]] = nexts[j];
				}
			}
		}
		n++;
	}
	return -1;
}
console.log(openLock(['0201', '0101', '0102', '1212', '2002'], '0202'));
```

