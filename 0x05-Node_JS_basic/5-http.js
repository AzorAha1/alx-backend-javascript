const http = require('http');
const countStudents = require('./3-read_file_async');

const studentContentPath = process.argv[2];
const port = 1245;
const app = http.createServer();

app.on('request', async (request, response) => {
  const { url } = request;

  if (url === '/') {
    const pageBodyInitial = 'Hello Holberton School!';
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Length', Buffer.byteLength(pageBodyInitial));
    response.end(pageBodyInitial);
  } else if (url === '/students') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    const title = 'This is the list of our students\n';
    response.write(title);

    try {
      const result = await countStudents(studentContentPath);
      response.end(result);
    } catch (error) {
      console.error(error);
      response.statusCode = 500;
      response.end('Cannot load the database');
    }
  }
});

app.listen(port, 'localhost', () => {
  console.log(`Server running at port ${port}`);
});

module.exports = app;
