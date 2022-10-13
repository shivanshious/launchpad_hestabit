const http = require("node:http");

const port = 3001;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello server is running !!!");
});

server.listen(port, hostname, () => {
  console.log("hiiii");
  console.log(`Server is running at http://${hostname}:${port}/`);
});
