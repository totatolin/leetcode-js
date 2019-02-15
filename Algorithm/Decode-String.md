#### Given an encoded string, return it's decoded string.

#### The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

#### You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

#### Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

```
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
```
#### 思路：遍历字符串一个个入栈，当遇到']'时进行出栈操作，直到遇到'['为止，拼接此时的字符串，接着出栈，遇到数字时将拼接好的字符串再放入栈中，以此类推。

```
var decodeString = function(s) {
      let stack = [];
    for (let i of s) {
        if (i !== ']') {
            stack.push(i);
        } else {
            let temp = "";
            while (stack[stack.length - 1] !== '[') {
                temp = stack.pop() + temp;
            }
            stack.pop(); // for [
            let count = "";
            while (stack.length > 0 && stack[stack.length - 1].match(/[0-9]+/)) {
                count = stack.pop() + count;
            }
            count = parseInt(count);
            let r = "";
            while (count > 0) {
                r += temp ;
                count--;
            }
            stack.push(r);
        }
    }
    let result = "";
    while (stack.length > 0) {
        result = stack.pop() + result;
    }
    return result;
};
```

