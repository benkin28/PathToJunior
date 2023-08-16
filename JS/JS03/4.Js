function findFirstString(arr) {
    return arr.findIndex((element) => element[0] == "A");
};

const test = ["nbrefw", "asf", "Abee", "uihgd"];

console.log(findFirstString(test));