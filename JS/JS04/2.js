async function fetchTask(url) {
  try {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error("URL damaged");
    }
    const json = await result.json();
    return json;
  } catch (e) {
    console.log(`Could not fetch ${url}`);
  }
}

const url = "https://jsonplaceholder.typicode.cobm/todos/1";
fetchTask(url).then((result) => console.log(result));
