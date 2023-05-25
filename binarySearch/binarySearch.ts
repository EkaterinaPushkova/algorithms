const binarySearch = (arrFind: number[], item: number) => {
    let low = 0;
    let high = arrFind.length-1;

    while (low <= high) {
        let mid = Math.floor(arrFind.length/2);
        let guess = arrFind[mid];
        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else if (guess < item) {
            low = mid + 1;
        }
        else return null;
    }
};

const testArray = [3, 4, 5, 6, 7];

console.log(binarySearch(testArray, 5));