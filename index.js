const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PROP = 5000;
app.listen(5000);
