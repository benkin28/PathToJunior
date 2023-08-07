function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

console.log(union(arr1, arr2));

