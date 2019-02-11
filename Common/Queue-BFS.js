/**
 * graph 传入的图数据结构
 * start 搜索的起始点
 */
function bfs (graph, start) {
	var isVisited = {}, // 用来检索节点是否已经被访问
		result = [], // 返回结果
		queue = [];
	queue.push(start);
	isVisited[start] = start;
	while (queue.length !== 0) {
		var top = queue[0];
		result.push(top); // 将队列头放到result
		for (var i = 0; i < graph[top].length; i++) { // 检索top中的节点，并放入队列中
			var node = graph[top][i];
			if (!isVisited[node]) {
				queue.push(node);
				isVisited[node] = node;
			}
		}
		queue.shift(); // 移出队列头
	}
	return result;
}

var graph = {
	'A': ['B', 'C'],
	'B': ['A', 'C', 'D'],
	'C': ['A', 'B', 'D', 'E'],
	'D': ['B', 'C', 'E', 'F'],
	'E': ['C', 'D'],
	'F': ['D']
}
bfs(graph, 'A');