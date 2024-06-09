const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = express();
const databasepath = process.argv[2];

app.get('/', (_, response) => {
  response.send('Hello Holberton School!');
});
app.get('/students', async (_, res) => {
  try {
    const students = await countStudents(databasepath);
    res.set('Content-Type', 'text/plain');
    res.status(200).send(`This is the list of our students\n${students}`);
  } catch (error) {
    res.status(500).set('Content-Type', 'text/plain').send('Cannot load the database');
    console.error(error);
  }
});
app.listen(port, () => {
  console.log(port);
});
module.exports = app;
