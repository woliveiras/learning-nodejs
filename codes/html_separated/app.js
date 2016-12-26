const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + '/index.html', (error, html) => {
    if (error) throw error;
    res.writeHeader(200, {'Content-Type' : 'text/html'});
    res.write(html);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Listen 3000...');
});