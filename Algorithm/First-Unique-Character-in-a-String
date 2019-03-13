#### Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

```
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
```
#### 思路1：使用字符串indexOf和lastIndexOf方法，如果该字符在字符串中只存在一个，那么indexOf和lastIndexOf必然相等。

```
var firstUniqChar = function(s) {
   for(i=0;i<s.length;i++){
       if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return i;
      } 
   }
   return -1;
};
```
#### 思路2：使用js对象来进行存储，然后再进行一次字符串遍历，取第一个单个字符。

```
var firstUniqChar = function(s) 
    var map=new Map();
    for(i=0;i<s.length;i++){
         if(map.has(s[i])){
             map.set(s[i],2);
         }
         else{
             map.set(s[i],1);
         }
     }

    for(i=0;i<s.length;i++){
        if(map.has(s[i]) && map.get(s[i])===1){
            return i;
        }
    }
    return -1;
 } ;
```

