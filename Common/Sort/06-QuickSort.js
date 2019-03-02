function partition (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}
function quick (array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quick(array, left, index - 1);
        }
        if (index < right) {
            quick(array, index, right);
        }
    }
}
function quickSort (array) {
    quick(array, 0, array.length - 1);
	return array;
}

// 先取一个基准点，将小于基准点的数都放到其左边，大于基准点的数放到右边。一直重复这个操作，直到左右全部排好序。
// 时间复杂度为O(nlogn)，最坏情况为O(n²)。
// 稳定性：不稳定。
// 是目前最优的排序算法，也是应用范围最广的。