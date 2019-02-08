#### Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

#### The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

#### You may assume the integer does not contain any leading zero, except the number 0 itself.

```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```
#### 思路：将数组的最后一位加上一，但是要考虑特殊情况，即各个位上满十需要进一位。

```
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
		++digits[i];
		if (digits[i] < 10) {
			break;
		}
		digits[i] -= 10;
	}
	digits[0] === 0 && digits.unshift(1);
	return digits;
};
```

