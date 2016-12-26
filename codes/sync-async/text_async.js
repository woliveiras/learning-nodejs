"use strict";

const fs = require('fs');

for(let i = 1; i <= 5; i++) {
  let file = "generated-files/async-txt" + i + ".txt";
  fs.writeFile(file, "Hello Async Node.js!", (err, out) => {
    if (err) throw err;
    console.log(out);
  });
}