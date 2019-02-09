#### Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```
#### 思路：添加一个二维数组，首位均为1，其他的位置arr[i][j]等于arr[i-1][j-1] + arr[i-1][j]。

```
var generate = function(numRows) {
    var arr = [];
    for (var i = 0; i < numRows; i++) {
    	arr[i] = [];
    	for (var j = 0; j <= i; j++) {
    		if (j === 0 || j === i) {
    			arr[i][j] = 1;
    		} else {
    			arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
    		}
    	}
    }
    return arr;
};
```

