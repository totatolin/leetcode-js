#### Given a non-empty array of integers, every element appears twice except for one. Find that single one.

#### Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

```
Input: [2,2,1]
Output: 1
```

```
Input: [4,1,2,1,2]
Output: 4
```
#### 思路：可以使用js对象的特性判断是否重复。但题目要求我们不使用多余的内存空间，故可以使用位运算^，由于两个相同数字的位运算^为0，所以所有数字位运算最终结果即为要找的数字。

```
var singleNumber = function(nums) {
    let res = nums[0], len = nums.length, i = 1
    for(i; i< len; i++) {
        res ^= nums[i]
    }
    return res
};
```

