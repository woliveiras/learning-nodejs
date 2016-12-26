const fs = require('fs');

const readAsync = (file) => {
  console.log("Leitura assíncrona");
  let start =  new Date().getTime();

  fs.readFile(file);

  let end = new Date().getTime();
  console.log("Bloqueio assíncrono: " + (end - start) + "ms");
};

module.exports = readAsync;