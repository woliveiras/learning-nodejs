"use strict";

const http = require('http');
const fs = require('fs');
const url = require('url');

const dir = (file) => {
  return __dirname + "/templates/" + file;
};

const router = (path) => {
  if(path && path != "/") {
    let file = dir(path + ".html");
    let fileExists = fs.existsSync(file);

    if(fileExists) {
      return file;
    }
    return dir("404.html");
  }
  return dir("home.html");
};

const server = http.createServer((req, res)=>{
  let path = url.parse(req.url).pathname;
  let page = router(path);

  fs.readFile(page, (err, html) => {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.end(html);
  });
});

server.listen(3000, function(){
  console.log('Listen 3000...');
});