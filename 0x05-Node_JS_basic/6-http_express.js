const express = require('express');

const port = 1245;
const app = express();

app.get('/', (_, response) => {
  response.send('Hello Holberton School!');
});
app.listen(port, () => {
  console.log(port);
});
module.exports = app;
