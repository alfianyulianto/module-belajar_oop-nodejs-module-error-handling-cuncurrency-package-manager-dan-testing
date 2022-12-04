const Http = require('http');

const hostname = '127.0.0.1';
const port = '3000';

const server = Http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Halo selamat datang di applikasi kami.`);
});