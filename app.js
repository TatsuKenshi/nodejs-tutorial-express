const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse the html form data
app.use(express.urlencoded({ extended: false }));

// get
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// post
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

app.listen(5000, () => {
  console.log("Server is listening on port : 5000...");
});

// get - read data
// post - insert data (place order, enter product into the table)
// put - update data (overwrite the entire entry)
// patch - update data (add data, overwrite specified fields)
// delete - delete data
