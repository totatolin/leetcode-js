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
