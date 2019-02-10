#### Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

```
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
```

#### 思路：该情况可以将数组从小到大排序，可以保证此时的min数字的总和最大，然后每间隔一个数字取一个数字，计算出总和。
```
var arrayPairSum = function(nums) {
	nums.sort(function(a,b) { return a - b; });
	var sum = 0;
	var i = nums.length - 1;
	while( i >= 0){
		sum += Math.min(nums[i],nums[i-1]);
		i = i-2;
	}
	return sum;
};
```