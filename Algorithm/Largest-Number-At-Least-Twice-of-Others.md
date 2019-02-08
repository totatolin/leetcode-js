#### In a given integer array nums, there is always exactly one largest element.

#### Find whether the largest element in the array is at least twice as much as every other number in the array.

#### If it is, return the index of the largest element, otherwise return -1.

```
Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
```

```
Input: nums = [1, 2, 3, 4]
Output: -1
Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.
```
#### 思路1：遍历一遍找到最大值，然后遍历数组，用每一个值与最大值进行比较，是否满足最大值大于两倍的该值。

```
var dominantIndex = function(nums) {
    var max = nums[0],
		index = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] > max) {
			max = nums[i];
			index = i;
		}
	}
	for (var i = 0; i < nums.length; i++) {
		if (i !== index && max < nums[i] * 2) {
			return -1;
		}
	}
	return index;
};
```
#### 思路2：遍历一遍，找出数组中的最大值和第二大值，比较这两个值是否满足条件即可。

```
var dominantIndex = function(nums) {
    var max = nums[0],
		index = 0,
		max2 = -Infinity;
	for (var i = 1; i < nums.length; i++) {
		if (nums[i] > max) {
			max2 = max;
			max = nums[i];
			index = i;
		} else {
			max2 = Math.max(max2, nums[i]);
		}
	}
	if (max >= max2 * 2) {
		return index;
	}
	return -1;
};
```

