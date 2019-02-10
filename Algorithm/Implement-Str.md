#### Implement strStr().

#### Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


```
Input: haystack = "hello", needle = "ll"
Output: 2
```

```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```
#### 思路1：正常匹配，将字符串中每个字母进行匹配，暴力方法（BF算法：Brute Force），总体的时间复杂度为O(m*n)。

```
var strStr = function(haystack, needle) {
    if(!needle &&! haystack)return 0;
    if(  !haystack && needle)return -1;
    var lh=haystack.length;
    var ln=needle.length;
    for(i=0;i+ln-1 < lh;i++)//abcdefg   cde
    {
        var res=haystack.substr(i, ln);
        if(res.localeCompare(needle)==0)return i;
    }
    return -1;
}
```
#### 思路2：kmp算法，可以更好的提高性能，时间复杂度为O(m+n)。