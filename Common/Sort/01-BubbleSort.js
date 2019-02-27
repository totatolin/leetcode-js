function bubbleSort (array) {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        var flag = true;
        for (var j = 0; j < length-1-i; j++) {
            if (array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = false;
            }
        }
        if (flag) break; // 如果数组本身就是有序的，则跳出循环
    }
}
// 该算法经过优化处理后，将每一轮最大的数移动到了最后一位，之后便不再做重复处理。但是每一次比较均需要调整两个元素的位置，不是很好的排序算法。
// 时间复杂度为O(n²)。
// 最好的情况当数组本来就是排序好的，此时的时间复杂度为O(n)。
// 空间复杂度为O(1)。
// 稳定性：因为每次比较后如果两个相邻元素相等则不会交换它们的位置，所以冒泡不会改变相同元素的下标，故是个稳定的排序。