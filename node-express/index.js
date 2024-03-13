const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body)
    res.send({
        msg: "Ok"
    })
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
