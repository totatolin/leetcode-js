#### Implement int sqrt(int x).

#### Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

#### Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

```
Input: 4
Output: 2
```

```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
```
#### 思路：使用二分法来确定这个数，先确定该数的中间数，一个大值和一个小值，每次循环确定要求数字所在的范围，然后逐渐缩小这个范围，直到找到要找的数。

```
var mySqrt = function(x) {
  if (x < 1) return 0;
  let high = x;
  let low = 1;
  let mid = 0;
  while(low + 1 < high) {
    mid = Math.floor((high + low)/2);
    if (mid * mid > x) {
      high = mid;
    } else if (mid * mid < x) {
      low = mid;
    } else {
      return mid;
    }
  }
  return low;
};
```

