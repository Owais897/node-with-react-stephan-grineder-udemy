if (process.env.NODE_ENV === "production") {
  //we are in production return the prod set of keys
  module.exports = require("./prod");
  console.log("we are in prod mode");
  console.log("cookie key testing *->", this.mongoURI);
} else {
  // we are in development return the dev keys
  module.exports = require("./dev");
  console.log("we are in dev mode");
}

// async function summair() {
//     if (process.env.NODE_ENV === "production") {
//       //we are in production return the prod set of keys
//       module.exports = await require("./prod");
//       console.log("we are in prod mode");
//       console.log("cookie key testing *->", this.mongoURI);
//     } else {
//       // we are in development return the dev keys
//       module.exports = await require("./dev");
//       console.log("we are in dev mode");
//     }
//   }

//   summair();
