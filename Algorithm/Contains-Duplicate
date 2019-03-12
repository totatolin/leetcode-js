#### Given an array of integers, find if the array contains any duplicates.

#### Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

```
Input: [1,2,3,1]
Output: true
```

```
Input: [1,2,3,4]
Output: false
```

```
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```
#### 思路：使用js对象的特性，判断对象中是否已经存在某个key，如果已经存在则return true，否则为false。

```
var containsDuplicate = function(nums) {
    var hash = {};
    for (var i = nums.length -1; i >=0 ; i--) {
        if (hash[nums[i]]) {
            return true;
        } else {
            hash[nums[i]] = 1;
        }
    }
    return false;
};
```

