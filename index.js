const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = new express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// app.get("/", (req, res) => {
//   res.send({ hi: "there", by: "where" });
// });

// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);

// cookie session store all the data directly on the cookie
// express session store all of the data in some like remote server and then call it when request come in it take the id out of it and goes and pull all the rows and data

// in expressSession all the data is put outside the cookie
// in cookie session all the data is put inside the cookie

// express unlimited Data
// cookie 4kb
