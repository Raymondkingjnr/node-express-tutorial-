const http = require("http");

//  the first parameter == req refers to the incoming request web, req is also a object
//  the res is what we are sending back to the server
//  web server listens for request
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});
server.listen(5000);
