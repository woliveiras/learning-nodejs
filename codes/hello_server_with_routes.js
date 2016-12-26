const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});

    if(req.url === "/") {
      res.write("<h1>Home</h1>");
    } else if(req.url === "/welcome"){
      res.write("<h1>Welcome Modafoca!</h1>");
    } else {
      res.write("<h1>404, not found</h1>");
    }

    res.end();
});

server.listen(3000, () => { console.log("Listen 3000..."); });