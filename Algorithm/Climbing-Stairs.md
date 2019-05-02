#### You are climbing a stair case. It takes n steps to reach to the top.

#### Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

#### Note: Given n will be a positive integer.

#### Example 1:

```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
#### Example 2:

```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
#### 思路：动态规划。由于只有一步或者两步两种选择，所以当前可以通过上一步加一到达，也可以通过上上一步加二到达。

```
var climbStairs = function(n) {
    let arr=[1,2,3];
    for(let i = 3;i<n;i++){
        arr[i]=arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};
```

