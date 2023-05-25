var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var quickSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var mid = arr[0];
    var leftArr = arr.filter(function (item) { return item < mid; });
    var rightArr = arr.filter(function (item) { return item > mid; });
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(leftArr), true), [mid], false), quickSort(rightArr), true);
};
var testArr = [50, 2, 14, 100, 10, 72, 63, 34];
console.log(quickSort(testArr));
