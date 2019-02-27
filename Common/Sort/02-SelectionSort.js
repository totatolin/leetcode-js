function selectionSort (array) {
    var length = array.length,
        indexMin;
    for (var i = 0; i < length-1; i++) {
        indexMin = i;
        for (var j = i; j < length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            var temp = array[i];
            array[i] = array[indexMin];
            array[indexMin] = temp;
        }
    }
}
// 选择排序的时间复杂度同样为O(n²)。它的思想是定一个索引为最小值索引，然后进行一轮比较，如果有比当前值小的，则将当前索引赋值给最小索引，一轮结束后将两个数的位置进行交换，比冒泡算法好的是一轮遍历只需要进行一次数值交换。
