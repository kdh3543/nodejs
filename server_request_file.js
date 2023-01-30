var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer((request, response) => {
  let parsedUrl = url.parse(request.url);
  let source = parsedUrl.pathname;

  if (source === "/hello") {
    // hello.html 파일 읽은 후
    fs.readFile("hello.txt", "utf-8", (error, data) => {
      if (error) {
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("500 internal server error : " + error);
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404 Page Not Found");
  }
});

server.listen(80, function () {
  console.log("Server is running...");
});
