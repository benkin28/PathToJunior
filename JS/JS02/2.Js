const obj = {
  name: "Ken",
  wife: "Barbie",
  revenue: 100000000,
};

const copy = {
  ...obj,
};

copy.name = "Bowser";

console.log(copy);
