const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const eachline = content.trim().split('\n');
      const students = eachline.slice(1).filter((line) => line.trim() !== '');
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
          console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
