function Stack () {
    var stack = [];
    this.push = function (data) {
        stack.push(data);
    };
    this.delete = function () {
        stack.pop();
    }
    this.size = function () {
        return stack.length;
    }
    this.peek = function () {
        return stack[stack.length-1];
    }
    this.isEmpty = function () {
        if (stack.length == 0){
            return true;
        } else {
            return false;
        }
    }
    this.emptyStack = function () {
        stack = [];
    }
    this.print = function () {
        return stack.toString();
    }
}