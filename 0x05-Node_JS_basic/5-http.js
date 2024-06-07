const http = require('http');
const fs = require('fs');

const studentcontentpath = './database.csv';
const port = 1245;
const app = http.createServer();
app.on('request', (request, response) => {
  const pagebodyinitial = 'Hello Holberton School!';
  const { url } = request;
  if (url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Length', pagebodyinitial.length);
    response.end(pagebodyinitial);
  } else if (url === '/students') {
    fs.readFile(studentcontentpath, (err, content) => {
      if (err) {
        response.statusCode = 404;
        console.error('not found');
      } else {
        const title = 'This is the list of our students';
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/csv');
        response.end(`${title}\n${content}`);
      }
    });
  }
});
app.listen(port, 'localhost', () => {
  process.stdout.write(`Server running at port ${port}`);
});
module.exports = app;
