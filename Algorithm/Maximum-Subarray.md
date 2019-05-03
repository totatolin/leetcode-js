#### Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

#### Example:

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

```
#### Follow up:

#### If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

#### 思路：动态规划。数组长度从一个开始考虑，长度为二时判断当前的值和之前值的大小，以此类推。

```
function maxSubArray(A) {
  var prev = 0;
  var max = -Number.MAX_VALUE;

  for (var i = 0; i < A.length; i++) {
    prev = Math.max(prev + A[i], A[i]);
    max = Math.max(max, prev);
  }
  return max;
}
```

