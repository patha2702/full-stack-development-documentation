const express = require("express");
const z = require("zod");

const app = express();
app.use(express.json());

const schema = z.array(z.number());

const user = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  country: z.literal("IN").or(z.literal("US")),
});

app.post("/health-check", (req, res) => {
  const inputUser = user.safeParse(req.body.user)
  res.json({
    inputUser
  })
});

app.listen(3000);
