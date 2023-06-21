const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  if (url === "/") {
    // home page
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    // about page
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  } else {
    // 404
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);
// // // // // // // // // //
//
// NOTES
//
// // // // // // // // // //

// request and response (req, res) parameters are objects. The first one is the request object from the user, and the second one is the response object from the server.

// res.writeHead provides the header for the response.

// res.end() signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.
