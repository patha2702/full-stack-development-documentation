"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use((0, cookie_parser_1.default)());
const JWT_SECRET = "secret";
app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const token = jsonwebtoken_1.default.sign({
        id: 1
    }, JWT_SECRET);
    res.cookie("token", token);
    res.send("Logged in");
});
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    res.send({
        id: decoded.id
    });
});
app.post("/logout", (req, res) => {
    res.cookie("token", "ads");
    res.send({
        message: "logged out"
    });
});
app.listen(3000, () => {
    console.log("Server running");
});
