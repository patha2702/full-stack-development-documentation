const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// User data storage
const users = [
  {
    name: "Rajendra",
    kidneys: [{ healthy: true }, { healthy: true }],
  },
];

function getUnhealthyKidneyCount(kidneys) {
  let unhealthyKidneyCount = 0;
  kidneys.map((kidney) => {
    if (!kidney.healthy) {
      unhealthyKidneyCount += 1;
    }
  });
  return unhealthyKidneyCount;
}

function getHealthyKidneyCount(kidneys) {
  let healthyKidneyCount = 0;
  kidneys.map((kidney) => {
    if (kidney.healthy) {
      unhealthyKidneyCount += 1;
    }
  });
  return healthyKidneyCount;
}

app.get("/", (req, res) => {
  const name = users[0].name;
  const kidneyCount = users[0].kidneys.length;
  const healthyKidneyCount = users[0].kidneys.filter((kidney) => {
    return kidney.healthy === true;
  }).length;
  const unhealthyKidneyCount = users[0].kidneys.filter((kidney) => {
    return kidney.healthy === false;
  }).length;
  res.send({
    name: name,
    kidneyCount: kidneyCount,
    healthyKidneyCount: healthyKidneyCount,
    unhealthyKidneyCount: unhealthyKidneyCount,
  });
});

app.post("/", (req, res) => {
  const kidneyStatus = req.body.isHealthyKidney;
  users[0].kidneys.push({
    healthy: kidneyStatus,
  });
  res.status(201);
  res.send({
    message: "Kidney added",
  });
});

app.put("/", (req, res) => {
  const unhealthyKidneys = getUnhealthyKidneyCount(users[0].kidneys);
  if (unhealthyKidneys > 0) {
    users[0].kidneys.forEach((kidney) => {
      kidney.healthy = true;
    });
    res.json({
      msg: "updated",
    });
  }
  res.status(411);
  res.json({});
});

app.delete("/", (req, res) => {
  const unhealthyKidneys = getUnhealthyKidneyCount(users[0].kidneys);
  if (unhealthyKidneys > 0) {
    const healthyKidneys = users[0].kidneys.filter((kidney) => {
      return kidney.healthy === true;
    });
    users[0].kidneys = healthyKidneys;

    res.send({
      msg: "Deleted!",
    });
  }
  res.status(411);
  res.json({});
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
