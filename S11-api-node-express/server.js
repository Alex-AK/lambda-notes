// Server ? What is a server
// It's a place in a computer that's listening for traffic, when it receives traffic, it responds with the appropriate information

// require is like imports, importing from Node
const http = require('http');

// ip address of this computer
const hostname = '127.0.0.1';

// where the server will run if you start it
const port = '3000';

// request object coming to the server, response object leaving from the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world, from Node.js');
});

server.listen(port, hostname, () => {
  console.log(`server listening on http://${hostname}:${port}`);
});
