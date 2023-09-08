function intersect(arr1, arr2) {
  return arr1.filter(
    (element) => arr2.findIndex((elem) => element === elem) !== -1
  );
}

console.log(intersect([1, 2, 3, 4], [3, 4, 5]));
