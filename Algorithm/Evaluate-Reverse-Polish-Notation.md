#### Evaluate the value of an arithmetic expression in Reverse Polish Notation.

#### Valid operators are +, -, *, /. Each operand may be an integer or another expression.

#### Note:
1. Division between two integers should truncate toward zero.
2. The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.


```
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```


```
Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```


```
Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```
#### 使用栈进行后缀表达式运算

```
function evalRPN(tokens) {
  const stack = [];
  
  for (let token of tokens) {
    if (token === '+') {
      stack.push(stack.pop()+stack.pop());
    } else if (token === '-') {
      stack.push(-stack.pop()+stack.pop());
    } else if (token === '*') {
      stack.push(stack.pop()*stack.pop());
    } else if (token === '/') {
      stack.push(Math.trunc(1/stack.pop()*stack.pop()));
    } else {
      stack.push(parseInt(token));
    }
  }
  
  return stack[0];
}
```

