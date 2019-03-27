#### Given an array of integers, return indices of the two numbers such that they add up to a specific target.

#### You may assume that each input would have exactly one solution, and you may not use the same element twice.

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
#### 思路：map中key为数字，val为该数字的索引，遍历数组，判断target与该数字的差是否在map中。

```
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};
```

