"use strict";

const fs = require('fs');

fs.readdir(__dirname, (err, data) => {
  if (err) throw err;

  data.forEach((content)=> {
    let path = './' + content;

    fs.stat(path, (err, stat) => {
      if (err) throw err;

      if(stat.isFile()) {
        console.log('%s %d bytes', content, stat.size);
      }
    });
  });
});