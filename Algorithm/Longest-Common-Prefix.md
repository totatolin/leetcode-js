#### Write a function to find the longest common prefix string amongst an array of strings.

#### If there is no common prefix, return an empty string "".

```
Input: ["flower","flow","flight"]
Output: "fl"
```
```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
#### 思路：由于是取多个字符串中的共同部分，所以可以选择第一项作为参考项。两层遍历，第一层为遍历字符串，第二层是遍历数组。如果遇到不同部分则直接跳出方法。
```
function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  
  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }
  
  return strs[0];
}
```