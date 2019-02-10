#### Given two binary strings, return their sum (also a binary string).

#### The input strings are both non-empty and contains only characters 1 or 0.

```
Input: a = "11", b = "1"
Output: "100"
```

```
Input: a = "1010", b = "1011"
Output: "10101"
```

#### 思路1：从最后一位进行二进制的计算，并且记录每次相加后需要进位的数字prev
```
var addBinary = function(a, b) {
	if(a == "" ) return b;
	if(b == "") return a;
    var prev = 0;
    var strArr = [];
    if (a.length > b.length) {
		return addBinary(b, a);
    }
    for (var i = 0; i < b.length; i++) {
    	if (a.length - i - 1 >= 0) {
    		var aChar = a.charAt(a.length - i - 1);
    	} else {
    		var aChar = '0';
    	}
    	var bChar = b.charAt(b.length - i - 1);
    	if ((+aChar + +bChar + prev) === 0) {
    		prev = 0;
    		strArr.unshift('0');
    	} else if ((+aChar + +bChar + prev) === 1) {
    		prev = 0;
    		strArr.unshift('1');
    	} else if ((+aChar + +bChar + prev) === 2) {
    		prev = 1;
    		strArr.unshift('0');
    	} else {
    		prev = 1;
    		strArr.unshift('1');
    	}
    }
    if (prev === 1) {
    	strArr.unshift('1');
    } 
    return strArr.join('');
};
```  
#### 思路2：与思路1相似，但是通过位运算计算每个位上的数字out及进位携带的数字carry。

```
var addBinary = function(a, b) {
    
    var out = "";
    var aEnd = a.length - 1;
    var bEnd = b.length - 1;
    
    var carry = "0";
    
    while(aEnd != -1 && bEnd != -1) {
        out = "" + (a[aEnd] ^ b[bEnd] ^ carry) + out;
        carry = "" + ((a[aEnd] & b[bEnd]) || (a[aEnd] & carry) || (b[bEnd] & carry));
        aEnd--;
        bEnd--;
    }
    if(aEnd != -1) {
        while(aEnd != -1) {
            out = "" + (a[aEnd] ^ carry) + out;
            carry = a[aEnd] & carry;
            aEnd--;
        }
    }
    if(bEnd != -1) {
        while(bEnd != -1) {
            out = "" + (b[bEnd] ^ carry) + out;
            carry = b[bEnd] & carry;
            bEnd--;
        }
    }
    if(aEnd == -1 && bEnd == -1 && carry == 1)
        out = '1' + out;
    return out;
};
```
