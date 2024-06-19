import express from "express"
import cookieParser from "cookie-parser"
import jwt, { JwtPayload} from "jsonwebtoken"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.use(cookieParser())

const JWT_SECRET = "secret"


app.post("/signin", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const token = jwt.sign({
        id: 1
    }, JWT_SECRET)
    res.cookie("token", token)
    res.send("Logged in")
})

app.get("/user", (req, res) => {
    const token = req.cookies.token
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
    res.send({
        id: decoded.id
    })
})

app.post("/logout", (req, res) => {
    res.cookie("token", "ads")
    res.send({
        message: "logged out"
    })
})

app.listen(3000, ()=> {
    console.log("Server running")
})