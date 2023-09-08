function getScores(arr) {
  const result = new Map();
  for (let element of arr) {
    result.set(
      element[0],
      result.get(element.at(0)) ? result?.get(element?.at(0)) + 1 : 1
    );
      result.set(element[1], 0);
  }
  return result;
}

console.log(
  getScores([
    ["A", "B"],
    ["A", "C"],
    ["B", "C"],
  ])
);
