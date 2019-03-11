function heapify (array, heapSize, i) {
    var left = i * 2 + 1;
    right = i * 2 + 2;
    largest = i;
    
    if (left < heapSize && array[left] > array[largest]) {
        largest = left;
    }
    
    if (right < heapSize && array[right] > array[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        var temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        heapify(array, heapSize, largest);
    }
}
function buildHeap (array) {
    var heapSize = array.length;
    for (var i = Math.floor(array.length / 2); i >= 0; i--) {
        heapify(array, heapSize, i);
    }
}
function heapSort (array) {
    var heapSize = array.length;
    buildHeap(array);
    while (heapSize > 1) {
        heapSize--;
        var temp = array[0];
        array[0] = array[heapSize];
        array[heapSize] = temp;
        heapify(array, heapSize, 0);
    }
}

// 完全二叉树：对于深度为K的，有n个结点的二叉树，当且仅当其每一个结点都与深度为K的满二叉树中编号从1至n的结点一一对应时称之为完全二叉树。
// 二叉堆是完全二叉树。
// 最大堆：任何一个父节点的值，都大于等于它左右孩子节点的值。
// 最小堆：任何一个父节点的值，都小于等于它左右孩子节点的值。
// 二叉堆是用数组来实现的，假设父节点的下标是parent，那么它的左孩子下标就是 2*parent+1；它的右孩子下标就是 2*parent+2 。