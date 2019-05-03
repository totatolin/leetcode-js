#### Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

#### Note:

#### The solution set must not contain duplicate triplets.

#### Example:

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```
#### 思路：快慢指针全遍历。

```
var threeSum = function(nums) {
	// sort the nums
	nums.sort((a, b) => a - b);

	const map = new Map();

	for (let i = 0; i < nums.length; ++i) {
		let first = nums[i];
		let low = i + 1;
		let high = nums.length - 1;

		let target = first * -1;

		while (low < high) {
			if (nums[low] + nums[high] === target) {
				let arr = [first, nums[low], nums[high]];
				map.set(arr.join(','), arr);
				++low;
				--high;
			} else if (nums[low] + nums[high] < target) {
				++low;
			} else {
				--high;
			}
		}
	}

	return [...map.values()];
};


```

