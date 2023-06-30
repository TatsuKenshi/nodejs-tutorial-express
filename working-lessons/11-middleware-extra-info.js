const express = require("express");
const app = express();
const logger = require("./10-middleware-logger");
const authorize = require("./11-middleware-authorize");
const morgan = require("morgan");
// req => middleware func => res
// app.use([logger, authorize]);

// 1. use vs route
// we can pass middleware through app.use() or directly in the app.get() route
// 2. options:
// a) out own functions
// b) express built-in functions
// app.use(express.static("./public"));
// c) 3rd-party
// app.use(morgan("tiny"));

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
