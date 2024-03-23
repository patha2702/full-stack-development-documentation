const express = require("express")
const jwt = require("jsonwebtoken")

const jwtPassword = "123456"

const app = express()
app.use(express.json())

const ALL_USERS = [
  {
    username: "patha2702",
    password: "rajendra",
    name: "Rajendra Patha"
  },
  {
    username: "raj2345",
    password: "batrandra",
    name: "Batra Raj"
  },
  {
    username: "kumar1234",
    password: "kumar@1234",
    name: "Kumar Gol"
  }
]

function checkUserCredentials(username, password) {
  const userExists = ALL_USERS.find((user => {
    return user.username === username && user.password === password 
  }))
  return userExists || false
}

app.get("/users", (req, res) => {
  const token = req.headers.authorization
  try {
    const decoded = jwt.verify(token, jwtPassword)
    const username = decoded.username
    const users = ALL_USERS.filter(user => {
      return user.username !== username
    })
    res.status(200).json({
      users
    })
  } catch (err) {
    res.status(403).json({
      msg: "Invalid token"
    })
  }
})

app.post("/signin", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const validUser = checkUserCredentials(username, password)
  if (!validUser) {
    res.status(403).json({
      msg: "No account found"
    })
    return
  }
  const token = jwt.sign({username: username}, jwtPassword)
  res.status(200).json({
    token
  })

})

app.listen(3000, ()=> {
  console.log("Server running on port: 3000")
})