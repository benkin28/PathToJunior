const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

const keys = map.keys();

function stringRep(map) {
  const keys = map.keys();
  let out = "";
  for (let i = 0; i < map.size; i++) {
    let temp = keys.next().value;
    out += `${temp}=>${map.get(temp)}`;
    out += "\t";
  }
  return out;
}

console.log(stringRep(map));
