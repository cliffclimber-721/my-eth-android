const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const path = require("path");
const jsonParser = bodyParser.json()

app.use(
    cors({
      origin: true,
      credentials: true,
      methods: ["GET", "POST", "DELETE", "PATCH", "OPTIONS"]
    })
  );

// start
app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "./server/App.js"))
})

// error
app.get("/", (req, res) => {
    res.status(404).send("No response.");
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})