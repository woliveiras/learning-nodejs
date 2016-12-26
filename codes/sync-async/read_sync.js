const fs = require('fs');

const readSync = (file) => {
  console.log("Leitura síncrona");
  let start =  new Date().getTime();

  fs.readFileSync(file);

  let end = new Date().getTime();
  console.log("Bloqueio síncrono: " + (end - start) + "ms");
};

module.exports = readAsync;