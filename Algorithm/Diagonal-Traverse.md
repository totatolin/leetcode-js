#### Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

Output:  [1,2,4,7,5,3,6,8,9]
```
#### 思路：重要的是转向方法，当移动超出边界后需要转向。

```
let findDiagonalOrder = function(matrix) {
    function reverse() {
        x = -x;
        y = -y;
    }

    if (matrix.length < 1) {
        return [];
    }

    let res = [], row = 0, col = 0, x = 1, y = -1;
    while (res.length < matrix.length * matrix[0].length) {
        res.push(matrix[col][row]);
        row += x;
        col += y;
        if (col < 0 && row < matrix[0].length) {
            reverse();
            col = 0;
        }
        if (row < 0 && col < matrix.length) {
            reverse();
            row = 0;
        }
        if (row >= matrix[0].length) {
            reverse();
            col += 2 * y;
            --row;
        }
        if (col >= matrix.length) {
            reverse();
            row += 2 * x;
            --col;
        }
    }
    return res;
};
```

