const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;
const databasePath = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = content.trim().split('\n');
      const students = lines.slice(1).filter(line => line.trim() !== '');

      let output = `Number of students: ${students.length}\n`;
      const fields = {};

      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
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
