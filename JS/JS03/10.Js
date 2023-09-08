function findBest(arr) {
  //name whack
  return arr.reduce((acc = 0, curr) => {
    //use find
    curr.score > acc.score ? (acc = curr) : (acc = acc); //if besser 
    return acc;
  });
}

console.log(
  findBest([
    { name: "Marha", score: 17 },
    { name: "Bernd", score: 28 },
  ])
);
