#### You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

#### Find out how many ways to assign symbols to make sum of integers equal to target S.


```
Input: nums is [1, 1, 1, 1, 1], S is 3. 
Output: 5
Explanation: 

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

There are 5 ways to assign symbols to make the sum of nums be target 3.
```

#### 思路：使用dfs算法，通过递归，枚举出所有的可能情况，满足总和等于S时output加一。

```
function findTargetSumWays (nums, S) {
	var output = 0;
	if (nums === null) {
		return output;
	}
	dfs(0, 0);
	return output;
	function dfs (k, sum) {
		if (k === nums.length) {
			if (S === sum) {
				output++;
			}
			return;
		}
		dfs(k+1, sum+nums[k]);
		dfs(k+1, sum-nums[k]);
	}
}
```
