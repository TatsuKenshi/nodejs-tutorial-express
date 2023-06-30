const express = require("express");
const app = express();
const logger = require("./10-middleware-logger");
const authorize = require("./11-middleware-authorize");
// req => middleware func => res
app.use([logger, authorize]);
// app.use(middlewareFuncName) allows us to insert the middleware function into each app request automatically.
// if you include a route as an argument to app.use, that route and it's subroutes will use the specified middleware.
// multiple middleware funcs are passed as arrays, and are executed in order.

app.get("/", (req, res) => {
  // express will send the req object as the parameter to the logger (or another middleware) function by default
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port : 5000...");
});
