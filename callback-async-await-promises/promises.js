// Creating our own read file function

const fs = require("fs");
function readMyFile(path, fn) {
  fs.readFile(path, "utf-8", (err, data) => {
    fn(data);
  });
}

function consoleData(data) {
  console.log(data);
}

readMyFile("./temp.txt", consoleData);

// Creating our own read file using promises:
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

readOurFile("./temp.txt")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise successfully completed");
  });
