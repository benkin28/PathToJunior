async function getJson(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      console.log("kek");
    }
    let json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}

getJson("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
  console.log(response)
);
