const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("Oops! This page doesn't exist");
});

app.listen(5000, () => {
  console.log("server is listening on port : 5000...");
});

// app.get; fetches/reads data
// app.post; inserts data
// app.put; updates data (overwrites entire entry)
// app.patch; updates data (overwrites only what is sent)
// app.delete; deletes data
// app.all; works with/handles all requests
// app.use; responsible for handling middleware
// app.listen; listens on a port
