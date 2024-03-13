fetch("http://localhost:3000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    healthy: false
  }),
})
  .then((res) => {
    if (!res.ok) {
      console.error("Error fetching the data");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
