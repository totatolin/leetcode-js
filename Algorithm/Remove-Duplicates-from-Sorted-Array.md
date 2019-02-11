#### Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

#### Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
```

```
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```
#### 思路1：两层遍历，内层遍历将数组中的每一项与外层进行比较，如果相同的则删除。

```
var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                nums.splice(j, 1);
                j--;
            }
        }
    };
    return nums.length;
};
```
#### 思路2：使用双指针，如果快慢指针所指数值相同，则移动快指针，不同时慢指针追赶，记录一共有几次不同。

```
var removeDuplicates = function(nums) {
    if(nums.length === 0) {
        return 0
    }
    let result = 1, i = 0, j = 1;
    
    while(i < nums.length && j < nums.length) {
        if(nums[j] === nums[i]) {
            j++;
        } else {
            result += 1;
            i++;
            nums[i] = nums[j];
            j++;
        }
    }
    
    return result;
};
```

