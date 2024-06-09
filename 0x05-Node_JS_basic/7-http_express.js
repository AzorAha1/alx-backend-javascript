const express = require('express');
const fs = require('fs');

const port = 1245;
const app = express();
const databasePath = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const eachline = content.trim().split('\n');
      const students = eachline.slice(1).filter((line) => line.trim() !== '');
      let output = `Number of students: ${students.length}\n`;
      console.log(`Number of students: ${students.length}`);
      const fields = {};
      students.forEach((student) => {
        const studentdata = student.split(',');
        const firstname = studentdata[0].trim();
        const field = studentdata[3].trim();
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });
      for (const key in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, key)) {
          const fieldOutput = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
          output += `${fieldOutput}\n`;
          console.log(fieldOutput);
        }
      }
      resolve(output.trim());
    });
  });
}
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
