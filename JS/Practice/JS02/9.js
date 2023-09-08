function updateAge(user, age) {
  const temp = JSON.parse(JSON.stringify(user));
  temp.age = age;
  return temp;
}

console.log(
  updateAge(
    {
      name: "Bennet",
      age: 19,
    },
    20
  )
);
