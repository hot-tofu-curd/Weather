//数组扩展
Array.prototype.includeArray = function (array) {

    let count = 0;
    for (i of array) {
        if (this.includes(i))
            count++;
    }
    if (count == array.length) {
        return true;
    } else {
        return false;
    }
}