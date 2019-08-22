const express = require("express");
const app = new express();

app.get("https://pacific-oasis-39607.herokuapp.com/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
