const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello modafoca!</h1>");
    res.end();
});

server.listen(3000, () => console.log("Listen 3000..."));