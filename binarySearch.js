var binarySearch = function (arrFind, item) {
    var low = 0;
    var high = arrFind.length - 1;
    while (low <= high) {
        var mid = Math.floor(arrFind.length / 2);
        var guess = arrFind[mid];
        if (guess === item) {
            return mid;
        }
        else if (guess > item) {
            high = mid - 1;
        }
        else if (guess < item) {
            low = mid + 1;
        }
        else
            return null;
    }
};
var testArray = [3, 4, 5, 6, 7];
console.log(binarySearch(testArray, 5));
