#### Given a binary array, find the maximum number of consecutive 1s in this array.

```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```
#### 思路1：遍历数组，记录连续1的数量，如果为0则把计数清零，返回最大的连续1的数量，时间复杂度为O(n)。

```
var findMaxConsecutiveOnes = function (nums) {
    var n = 0;  //计数；
    var p = 0; //记最大的数；
    
    for (var i = 0;i < nums.length; i++){
        if (nums[i] === 1) {
            n++;
        } else {
            n = 0;
        }
        if (n>p) {
            p = n;
        }
    }
    return p;
};
```
#### 思路2：与方法1类似，时间复杂度同为O(n)，使用双指针方法，快指针走到0时停止，慢指针设置为此时快指针的位置，记录最大的连续1的数量。

```
var findMaxConsecutiveOnes = function(nums) {
    var max = 0,
    	n = 0,
    	slow = 0,
    	fast = 0;
    while (slow < nums.length && fast < nums.length) {
    	if (nums[fast] === 1) {
    		fast++;
    		n++;
    	} else if (nums[fast] === 0) {
    		slow = fast;
    		fast++;
    		n = 0;
    	}
    	if (n > max) {
    		max = n;
    	}
    }
    return max;
};
```

