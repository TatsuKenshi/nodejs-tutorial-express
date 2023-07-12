const express = require("express");
const app = express();
let { people } = require("../data");

// static assets
app.use(express.static("../methods-public"));

// parse the html form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

// get
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// post to "/api/people"
app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// postman test
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide a name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

// post
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

// put
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// delete
app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is listening on port : 5000...");
});

// get - read data
// post - insert data (place order, enter product into the table)
// put - update data (overwrite the entire entry)
// patch - update data (add data, overwrite specified fields)
// delete - delete data
