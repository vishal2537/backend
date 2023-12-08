const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page");
  }
  else if (req.url === "/about") {
    res.end("here is our short history");
  } else {
    res.end(`
        <h1>oops!!</h1>
        <p>error page</p>
        <a href="/">back home</a>
    `);
  }
});

server.listen(5000, () => {
  console.log("server listen port : 5000");
});
