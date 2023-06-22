const express = require("express");
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));

//
// // //
// though possible and usable, we don't use res.sendFile to get index.html.
// We can put index.html inside the public folder.
// We can also use template engine via server-side rendering (SSR).
// // //
//
// });

app.get("*", (req, res) => {
  res.status(404).send("resource not found.");
});

app.listen(5000, () => {
  console.log("Server is listening on port : 5000...");
});

// a static resource is a file server doesn't need to change
// public (and/or static) folder is the most common place for static resource files

// there are two main options with express - using an api or resorting to server-side-rendering.

// api - in express, api is an http interface to interact with data
// api - json / data is sent using json objects (javascript object notation)
// send data / with api approach, we send data
// res.json() is used to send response (it sets the right content type, stringifies data, etc)
// with the api approach, we can use an http request to fetch data from the server to set up the functionality. Front end page content is left to the front end side of the site.

// server side rendering
// ssr - template / we set up templates
// send template / templates send entire html, css, and js files
// res.render() is the response method used with SSR instead of res.json()
