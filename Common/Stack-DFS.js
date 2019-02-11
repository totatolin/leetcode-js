/**
 * graph 传入的图数据结构
 * start 搜索的起始点
 */
function dfs (graph, start) {
	var isVisited = {}, // 用来检索节点是否已经被访问
		result = [], // 返回结果
		stack = [];
	stack.push(start);
	isVisited[start] = start;
	while (stack.length !== 0) {
		var tail = stack[stack.length - 1];
		result.push(tail); // 将栈尾放到result
		stack.pop(); // 移出栈尾
		for (var i = 0; i < graph[tail].length; i++) { // 检索tail中的节点，并放入栈中
			var node = graph[tail][i];
			if (!isVisited[node]) {
				stack.push(node);
				isVisited[node] = node;
			}
		}
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
dfs(graph, 'A');
