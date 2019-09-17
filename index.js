const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const b = keys.mongoURI;
const a =
  " mongodb+srv://owaisprod:owais123@cluster0-cslof.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(b, { useNewUrlParser: true });
console.log("keys.mongoURI b->", keys.mongoURI);
console.log("a->", a);
console.log("client id in index", keys.googleClientID);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection established test");
});
const app = new express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //express will serve up production assets
  // like our main.js file or main.css file
  app.use(express.static("/client/build"));

  // express will serve up the index.html file
  // if it doesnt recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// app.get("/", (req, res) => {
//   res.send({ hi: "there", by: "where" });
// });

// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);
