#### Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

#### The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:
1. Your returned answers (both index1 and index2) are not zero-based.
2. You may assume that each input would have exactly one solution and you may not use the same element twice.

```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```
#### 思路1：由于是取出两个数字，可以将数组中的数字存放在一个字典中，遍历数组，检查target减去当前值后得到的数值是否依然在字典中。

```
var twoSum = function(numbers, target) {
    let dict = {};
    for (i in numbers){
        if (target - numbers[i] in dict){
            return [dict[target - numbers[i]] + 1, Number(i) + 1];
        }
        dict[numbers[i]] = Number(i);
    }
};
```
#### 思路2：使用双指针来处理，一个指针从头开始，一个指针从尾开始，循环遍历，当头指针大于尾指针时结束循环。如果两数只和大于target，移动尾指针；如果两数之和小于target，移动头指针。直到等于target为止。

```
var twoSum = function(numbers, target) {
    var low = 0;
    var high = numbers.length - 1;
    
    while(low < high) {
        if(numbers[low] + numbers[high] == target) {
            return [++low, ++high];
        }
        else if(numbers[low] + numbers[high] > target) {
            high--;
        } else {
            low++;
        }
    }
    return [-1,-1];
};
```

