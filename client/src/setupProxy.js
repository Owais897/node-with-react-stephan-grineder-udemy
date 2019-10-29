const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
  app.use(proxy("/api/*", { target: "http://localhost:5000" }));
};

// Adding multiple proxies is done like this:

// const proxy = require('http-proxy-middleware')

// module.exports = function(app) {
//     app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
//     app.use(proxy('/api/*', { target: 'http://localhost:5000' }))
// }
