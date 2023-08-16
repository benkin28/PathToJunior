function product(arr) {
    return arr.reduce((acc, curr) => acc = acc * curr);
}

const arr = [1, 2, 3, 4];

console.log(product(arr));