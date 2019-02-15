#### Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.


```
Input:
0 0 0
0 1 0
0 0 0

Output:
0 0 0
0 1 0
0 0 0
```

```
Input:
0 0 0
0 1 0
1 1 1

Output:
0 0 0
0 1 0
1 2 1
```
#### 思路：使用广度优先，第一层先遍历当前节点的上下左右，第二层遍历上下左右的外层节点，以此类推。

```
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

function updateMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let queue = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
      } else matrix[i][j] = Number.MAX_VALUE;
    }
  }

  while (queue.length) {
    const [i, j] = queue.shift();
    for (let d of dirs) {
      const row = i + d[0];
      const col = j + d[1];

      if (
        row < 0 || row >= m || col < 0 || col >= n || matrix[row][col] <= matrix[i][j] + 1
      ) continue;
      queue.push([row, col]);
      matrix[row][col] = matrix[i][j] + 1;
    }
  }

  return matrix;
}
```

