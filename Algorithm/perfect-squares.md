#### Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

```
Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
```

```
Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.
```
#### 思路1：使用bfs算法，s()代表平方数，v()代表剩下的value值。以12为例，12可以分为s(3)+v(3)|s(2)+v(8)|s(1)+v(11)，然后每一个v值均可以继续展开，遍历搜索，直到遇到v值是平方数时跳出，返回此时的步数output。
```
function numSquares (n) {
	var sqrtObj = {},
		queue = [],
		sqrt = Math.floor(Math.sqrt(n)),
		output = 2;
	for (var i = 1; i <= sqrt; i++) {
	    var num = i * i;
	    sqrtObj[num] = num;
	    if (n === num) {
	    	return 2;
	    }
	}
	queue.push(n);
	while (queue.length !== 0) {
		var len = queue.length;
		for (var i = 0; i < len; i++) {
			var head = queue.shift();
			var sqrtNum = Math.floor(Math.sqrt(head));
			for (var j = 1; j <= sqrtNum; j++) {
				var value = head - j * j;
				if (sqrtObj[value]) {
					return output;
				} else {
					queue.push(value);
				}
			}
		}
		output++;
	}
}
console.log(numSquares(4));
```
#### 思路2：使用动态规划算法，初始化遍历n，把所有的平方数置为1，其他数置为n。p()为当前数的最优解。可以推出：p(1)为1，p(2)为p(1)+1，p(3)为p(2)+1，p(4)为1，p(5)为p(4)+1或p(1)+1，p(6)为p(5)+1或p(2)+1。。。。以此类推

```
var numSquares = function(n){
    var square_num = [];
    for (var i=1; i<=n; i++){
        square_num[i] = n;
    }
    for (var j=1; j*j<=n; j++){
        square_num[j*j] = 1;
    }
    for (var a=1; a<=n; a++){
        for(var b=1; b*b<n; b++){
            if(square_num[a]>square_num[a-b*b]+1 && a>b*b){
                square_num[a]=square_num[a-b*b]+1;
            }
        }
    }
    return square_num[n];
};
```
