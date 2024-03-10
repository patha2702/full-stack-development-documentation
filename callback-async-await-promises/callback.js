const fs = require("fs");

// SetTimeout()
function calculateSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

setTimeout(calculateSum, 2000, 100);

// Reading file
fs.readFile("./temp.txt", "utf-8", (err, data) => {
  if (err !== null) {
    throw err;
  }
  console.log(data);
});

const time1 = new Date().getTime();

// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const time2 = new Date().getTime();
    console.log(time2 - time1);
  });
