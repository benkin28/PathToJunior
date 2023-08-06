const obj1 = {
  name: "Ken",
  wife: "Barbie",
  revenue: 100000000,
};

const obj2 = {
  name: "Ben",
  wife: "Barbie",
  revenue: 1000000,
};

const obj3 = {
  name: "Gen",
  wife: "Barbie",
  revenue: 10000000000000,
};

function sortByProp(arr, propertyName) {
  return arr.sort((a, b) => {
    if (a[propertyName] > b[propertyName]) {
      return 1;
    } else if (a[propertyName] < b[propertyName]) {
      return -1;
    } else {
      return 0;
    }
  });
}

const arr = [obj1, obj2, obj3];
console.log(sortByProp(arr, "name"));
