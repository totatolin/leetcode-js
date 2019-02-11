#### Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```
#### 思路：使用双指针方法，快指针移动到总量大于s时停止，记录此时的快慢指针之间的间隔，即为返回值，慢指针追赶快指针，小于s时停止，继续移动快指针，最终返回值为快慢指针间最小间隔。

```
var minSubArrayLen = function(s, nums) {
    let ret = Infinity
    for (let i = 0, j = 0, sum = 0; j <= nums.length; ) {
        if (sum < s || i >= j) {
            sum += nums[j++]
        } else {
            ret = Math.min(ret, j - i)
            sum -= nums[i++]
        }
    }
    return ret === Infinity ? 0 : ret
};
```

