function union(arr1, arr2) {
  const temp = arr1.concat(arr2);
  return temp.filter(
    (element, index) => index === temp.findIndex((elem) => elem === element)
  );
}

console.log(union([1, 2, 3], [3, 4, 5]));
