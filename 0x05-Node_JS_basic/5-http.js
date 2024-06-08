const http = require('http');
const countStudents = require('./3-read_file_async');

const studentcontentpath = process.argv[2];
const port = 1245;
const app = http.createServer();
app.on('request', async (request, response) => {
  const pagebodyinitial = 'Hello Holberton School!';
  const { url } = request;
  if (url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Length', Buffer.byteLength(pagebodyinitial));
    response.end(pagebodyinitial);
  } else if (url === '/students') {
    try {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      const title = 'This is the list of our students';
      const studentsdata = await countStudents(studentcontentpath);
      const responseData = `${title}\n${studentsdata}`;
      response.setHeader('Content-Length', Buffer.byteLength(responseData));
      response.end(responseData);
    } catch (error) {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'text/plain');
      response.end('An error occurred while processing your request');
      console.log(error);
    }
  }
});
app.listen(port, 'localhost', () => {
  process.stdout.write(`Server running at port ${port}\n`);
});
module.exports = app;
