#### Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
#### An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

```
Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false

Input: "([)]"
Output: false

Input: "{[]}"
Output: true
```
#### 思路：经典的栈使用算法，判断括号是否闭合，遍历输入值，如果是左括号则入栈，右括号的话判断其对应的左括号是否与栈顶的值相等，以此来判断是否为有效的括号。

```
var isValid = function(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    let arr = [];
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[s[i]]){
                arr.pop();
            }
            else return false;
        }
    }
    return arr.length === 0 ? true : false;
};
```

