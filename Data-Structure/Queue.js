function Queue () {
    var queue = [];
    this.push = function (data) {
        queue.push(data);
    }
    this.delete = function () {
        queue.shift();
    }
    this.queueFront = function () {
        return queue[0];
    }
    this.isEmpty = function () {
        if (queue.length == 0){
            return true;
        } else {
            return false;
        }
    }
    this.size = function () {
        return queue.length;
    }
    this.emptyQueue = function () {
        queue = [];
    }
    this.print = function () {
        return queue.toString();
    }
}
