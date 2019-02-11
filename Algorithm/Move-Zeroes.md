#### Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```
#### 思路：将数组从后向前遍历，如果是0则删除，并在数组尾部添加，由于是从尾部开始遍历，在这种情况下不会改变遍历的长度和索引的位置。

```
var moveZeroes = function(nums) {
    for(var i = nums.length;i--;){
        if(nums[i]===0){
            nums.splice(i,1)
            nums.push(0);
        }
    }
};
```

