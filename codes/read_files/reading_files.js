const fs = require('fs');

// console.log(fs.readFileSync('file.txt', 'utf-8'));

fs.readFile('./file.txt', 'utf-8', (error, data) => {
  if (error) throw error;
  console.log(data);
});