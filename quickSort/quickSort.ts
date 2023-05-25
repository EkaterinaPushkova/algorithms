const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr;
    } 

    const mid = arr[0];
    
    const leftArr = arr.filter(item => item < mid);

    const rightArr = arr.filter(item => item > mid);

    return [...quickSort(leftArr), mid, ...quickSort(rightArr)];
}

const testArr = [50, 2, 14, 100, 10, 72, 63, 34];
console.log(quickSort(testArr));