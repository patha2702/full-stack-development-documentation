const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://rajendra:Rajendra20@cluster0.lmdazab.mongodb.net/user_app"
);

const User = mongoose.model("Users", {
  username: String,
  password: String,
  firstname: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstname = req.body.firstname;

  const userExists = await User.findOne({ username: username });

  if (userExists) {
    res.status(400).json({
      msg: "username already exists",
    });
    return;
  }

  const user = new User({
    username: username,
    password: password,
    firstname: firstname,
  });
  await user.save();
  res.status(201).json({
    msg: "User created"
  })
});

app.listen(3000, ()=> {
    console.log("Server running on port: 3000")
})
