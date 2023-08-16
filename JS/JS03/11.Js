function avAgeMunich(arr) {
  const munichs = arr.filter((element) => element.city === "Munich");
  return (
    munichs.reduce((acc, curr) => (acc = acc.score + curr.score)) / //wieso ist das so goofy und acc ein Objekt??//
    munichs.length
  );
}

console.log(
  avAgeMunich([
    { name: "Marha", score: 17, city: "Munich" },
    { name: "Bernd", score: 28, city: "Bielefeld" },
    { name: "Bernd", score: 28, city: "Munich" },
  ])
);
