#### Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

#### For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

#### 思路1：使用栈的特点来实现。将第一个数字入栈，第二个数字进入前判断如果比第一个大，则第一个出栈第二个入栈，记录此时栈的length存入数组，如果比第一个小，则继续入栈，以此类推。

```
var dailyTemperatures = function(temperatures) {
    let res = Array.from({length:temperatures.length},x=>0);
    let stack = [];
    for(let i=0; i<temperatures.length; i++){
    	while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
    		let j = stack.pop();
    		res[j] = i-j;
    	}
    	stack.push(i);
    }
    return res;
};
```
#### 思路2：使用双指针方法，时间复杂度O(n)，空间复杂度O(1)。快指针向前，直到当快指针指向的值大于慢指针的指向值，此时将慢指针的值置为两指针之间的差值，重置快、慢指针到同一位置，即慢指针的下一个索引，以此类推。但是需要注意的是，当快指针超出数组时，直接将慢指针的值置为0，代表此时找不到满足情况的温度，再重置快、慢指针的位置。

```
var dailyTemperatures = function(T) {
    var slow = 0,
        fast = 0;
    while (slow < T.length) {
        if (fast === T.length - 1) {
            T[slow] = 0;
            slow++;
            fast = slow;
        } else {
            fast++;
            if (T[fast] > T[slow]) {
                T[slow] = fast - slow;
                slow++;
                if (fast - slow > 0) {
                    fast = slow;
                }
            }
        }
    }
    return T;
};
```
