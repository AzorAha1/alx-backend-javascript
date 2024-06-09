const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = express();
const databasePath = process.argv[2];

app.get('/', (_, response) => {
  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  try {
    const students = await countStudents(databasePath);
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`This is the list of our students\n${students}`);
  } catch (error) {
    res.status(500).setHeader('Content-Type', 'text/plain').send('Cannot load the database');
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
