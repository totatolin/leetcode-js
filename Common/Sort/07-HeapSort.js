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