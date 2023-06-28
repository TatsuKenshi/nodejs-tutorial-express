const express = require("express");
const app = express();
// req => middleware func => res

const logger = (req, res, next) => {
  // middleware functions have req, res, and next params
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // with middleware, we end it either by:
  // sending back our own response through res.send()
  // passing onto the next function or middleware with next()
  next();
};

app.get("/", logger, (req, res) => {
  // express will send the req object as the parameter to the logger (or another middleware) function by default
  res.send("Home Page");
});
app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server is listening on port : 5000...");
});
