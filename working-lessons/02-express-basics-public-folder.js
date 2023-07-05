const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("../public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.get("*", (req, res) => {
  res.status(404).send("resource not found.");
});

app.listen(5000, () => {
  console.log("Server is listening on port : 5000...");
});

// a static resource is a file server doesn't need to change
// public (and/or static) folder is the most common place for static resource files
