// Reading file using async await
const fs = require("fs")
const readOurFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err !== null) {
        rej(err);
      } else {
        res(data);
      }
    });
  });
};

const readContent = async () => {
    const data = await readOurFile("./temp.txt")
    console.log(data)
}
readContent()

// Fetching data using async await

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

fetchData();
