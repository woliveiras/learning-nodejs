"use strict";

const fs = require('fs');

const read = (file) => {
  let path = './' + file;

  fs.stat(path, (err, stat) => {
    if (err) return err;

    if (stat.isFile()) {
      console.log('%s %d bytes', file, stat.size);
    }
  });
};

const readDirectory = () => {
  fs.readdir(__dirname, (err, dir) => {
    if (err) return err;

    dir.forEach((file) => {
      read(file);
    });
  });
};

readDirectory();