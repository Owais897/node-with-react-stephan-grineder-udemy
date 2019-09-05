if (process.env.NODE_ENV === "production") {
  //we are in produrequire("./prod");
  console.log("cookie key testing *->", this.cookieKey);
} else {
  // we are in development return the dev keys
  module.exports = require("./dev");
}
