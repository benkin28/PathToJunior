function findBest(arr) {
  return arr.reduce((acc=0, curr) => {
    curr.score > acc.score ? (acc = curr) : (acc = acc);
      return acc;
  });
}

console.log(
  findBest([
    { name: "Marha", score: 17 },
    { name: "Bernd", score: 28 },
  ])
);
