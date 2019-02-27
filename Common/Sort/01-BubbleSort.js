function bubbleSort (array) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length-1-i; j++) {
            if (array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}
// 时间复杂度为O(n²)。该算法经过优化处理后，将每一轮最大的数移动到了最后一位，之后便不再做重复处理。但是每一次比较均需要调整两个元素的位置，不是很好的排序算法。
