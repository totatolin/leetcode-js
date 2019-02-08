#### Given an array of integers nums, write a method that returns the "pivot" index of this array.

#### We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

#### If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.


```
Input: 
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: 
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
```

```
Input: 
nums = [1, 2, 3]
Output: -1
Explanation: 
There is no index that satisfies the conditions in the problem statement.
```

#### 思路：先运算所有数字的总和，然后遍历数组，当找到的索引index满足总量减去这个index的值除以二之后和左边的总和相等时即找到pivot index。时间复杂度O(N)，空间复杂度O(1)。

```
var pivotIndex = function(nums) {
	var sum = 0,
		sumL = 0
	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	for (var i = 0; i < nums.length; i++) {
		if (sumL === (sum - nums[i])/2) {
			return i;
		}
		sumL += nums[i];
	}
	return -1;
};
```

