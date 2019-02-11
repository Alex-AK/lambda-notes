const express = require('express');
const port = '5000';

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello world, from Node.js');
// });

const server = express();

// define API endpoint
server.get('/', (req, res) => {
  res.send('Hello world from Express!');
});

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});
