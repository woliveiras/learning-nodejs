"use strict";

const fs = require('fs');

for(let i = 1; i <= 5; i++) {
  let file = "generated-files/sync-txt" + i + ".txt";
  let out = fs.writeFileSync(file, "Hello Sync Node.js!");
  console.log(out);
}