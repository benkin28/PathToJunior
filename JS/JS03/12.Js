function highPerformer(arr) {
    return arr.filter((element) => element.score > 100);
}

console.log(highPerformer([{ name: "bernd", score: 69 }, { name: "Kalle", score: 420 }]));