function insertionSort (array) {
    var length = array.length,
        j,
        temp;
    for (var i = 1; i < length; i++) {
        j = i;
        temp = array[i];
        while (j > 0 && array[j-1] > temp) {
            array[j] = array[j-1];
            j--;
        }
        array[j] = temp;
    }
}
// 先取出一个待插入的数，将该数逐次与前面的数进行比较，如果小于则插入。它的特点是，如果待插入的前一位已经不满足条件，则不再向前进行比较。性能比冒泡和选择排序要好。
// 时间复杂度为O(n²)。
// 最好的时间复杂度为O(n)，即如果为有序数组时，只遍历一遍。
// 空间复杂度为O(1)。
// 稳定性：稳定。