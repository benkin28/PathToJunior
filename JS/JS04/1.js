fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((result) => {
    if (!result.ok) {
      throw new Error(`Exited with ${result}`);
    } else {
      return result;
    }
  })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error("URL damaged"));
