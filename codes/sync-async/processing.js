const http = require('http');
const fs = require('fs');
const readAsync = require('./read_async.js');
const readSync = require('./read_sync.js');
const file = './node.exe';
const stream = fs.createWriteStream(file);
const download = "http://nodejs.org/dist/latest/node.exe";

http.get(download, (res) => {
  console.log("Fazendo download do Nodejs");

  res.on('data', (data) => {
    stream.write(data);
  });

  res.on('end', () => {
    stram.end();
    console.log("Download finalizado");
    readSync(file);
    readAsync(file);
  });
});