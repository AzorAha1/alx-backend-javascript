const app = require('http');

const port = 1245;
const server = app.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});
server.listen(port, 'localhost', () => {
  console.log(port);
});