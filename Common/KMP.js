/**
* 生成部分匹配表
*/
function kmpGetPartMatchTable(targetStr){
 var aPartMatchTable = [];
 var tmpCompareLen = 0;
 var tmpPartMatchVal = 0;
 var prefix,suffix;//匹配串前缀,后缀
 for (var i = 0, j = targetStr.length; i < j; i++){
     if (i == 0){
         aPartMatchTable[i] = 0;
         continue;
     }
     tmpCompareLen = i; //匹配串前缀,后缀最大长度
     tmpPartMatchVal = 0;
     for (;tmpCompareLen > 0; tmpCompareLen--){
         prefix = targetStr.substr(0,tmpCompareLen);
         suffix = targetStr.substr(i-tmpCompareLen+1,tmpCompareLen);
         if (prefix == suffix){ //找到匹配串前缀,后缀最长的共有元素
             tmpPartMatchVal = prefix.length; //部分匹配值为:匹配串前缀,后缀最长的共有元素的长度
             break;
         }
     }
     aPartMatchTable[i] = tmpPartMatchVal;
 }
 return aPartMatchTable;
}

/**
* KMP算法 查找字符串
*/
function KMP(sourceStr,targetStr){
 var partMatchValue = kmpGetPartMatchTable(targetStr); //部分匹配表
 var result = false;
 var i,j,m,n;
 n = targetStr.length;
 for(i=0,j=sourceStr.length;i<j;i++){
     for(var m=0;m<n;m++){
         if(targetStr.charAt(m) != sourceStr.charAt(i+m)){
             if ( (m > 0) && (partMatchValue[m-1] > 0) ){
                 i += (m-partMatchValue[m-1]-1); //设置外层循环开始位置
             }
             break;
         }
     }
     if (m == n){
         result = true;
         break;
     }
 }
 return result;
}

// kmp参考链接：https://blog.csdn.net/x__1998/article/details/79951598