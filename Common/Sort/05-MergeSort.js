// 递归方式
function merge (left, right) {
    var result = [],
        il = 0,
        ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while (il < left.length) {
        result.push(left[il++]);
    }
    while (ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
}
function mergeSortRec (array) {
    var length = array.length;
    if (length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));
}
function mergeSort (array) {
    return mergeSortRec(array);
}

// 归并排序使用的是分治算法，先将数组拆分成各个子元素，再逐次将每个元素进行整合。
// 它的各情况时间复杂度均为O(nlogn)。
// 空间复杂度为O(n)，因为引入了新的数组用来存放各个排序好的元素。
// 稳定性：稳定。