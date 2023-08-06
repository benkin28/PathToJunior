const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

function increase(map, key) {
  if (map.has(key)) {
    return map.get(key) + 1;
  }
  return 1;
}
console.log(increase(map, "a"));
