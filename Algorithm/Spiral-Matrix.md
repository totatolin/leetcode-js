#### Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```

```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```
#### 思路：重要的是转向方法，当移动超出边界后需要转向。

```
var spiralOrder = function(matrix) {
    var spiralArray = [];
    if (matrix.length === 0) {
        return spiralArray;
    }
    var rowBegin = 0;
    var rowEnd = matrix.length - 1;
    var colBegin = 0;
    var colEnd = matrix[0].length - 1;
    
    while (colBegin <= colEnd && rowBegin <= rowEnd) {
        for (var i = colBegin; i <= colEnd; i++) {
            spiralArray.push(matrix[rowBegin][i]);
        }
        rowBegin++;
        for (var i = rowBegin; i <= rowEnd; i++) {
            spiralArray.push(matrix[i][colEnd]);
        }
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (var i = colEnd; i >= colBegin; i --) {
                spiralArray.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;
        if (colBegin <= colEnd) {
            for (var i = rowEnd; i >= rowBegin; i--) {
                spiralArray.push(matrix[i][colBegin]);
            }
        }
        colBegin++;
    }
    return spiralArray;
};
```

