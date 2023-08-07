function splitArray(arr, n) {
    if (n > arr.length) {
        console.log("Invalid Column");
        return;
    }
    return arr[n-1];
}

const arr = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 8, 5, 7, 8]];

console.log(splitArray(arr,2));