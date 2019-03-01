function shellSort (array, n) {
    var gap = n,
        j;
    while (gap > 1) {
        gap = gap/3 + 1;
        for (var i = 0; i < n-gap; i++) {
            j = i;
            var temp = array[j + gap];
            while (j >= 0 && array[j] > temp) {
                array[j + gap] = array[j];
                j = j - gap;
            }
            array[j + gap] = temp;
        }
    }
}

// 希尔排序可以理解成是多个小的插入排序构成，由于插入排序只对小数据量比较高效，希尔排序为了解决中型数组的情况。
// gap值为插入间隔，比如开始时候间隔为4，即每间隔4位进行一次插入排序，然后每间隔2位进行插入排序，然后是一位。
// 希尔排序的时间复杂度计算较为复杂，且间隔存在很多种方式。
// 基本的平均情况为O(n^1.3)，最好为O(n)，最坏为O(n²)。
// 稳定性：不稳定。