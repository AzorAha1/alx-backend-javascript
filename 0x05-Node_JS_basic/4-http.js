const http = require('http');

const port = 1245;
const app = http.createServer();
app.on('request', (_, response) => {
  const pagebody = 'Hello Holberton School!';
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', pagebody.length);
  response.write(Buffer.from(pagebody));
});
app.listen(port, 'localhost', () => {
  process.stdout.write(`Server running at port ${port}`);
});
module.exports = app;
