var http = require("http");
var url = require("url");

var server = http.createServer((request, response) => {
  // 실제 요청한 주소 전체
  console.log(request.url);

  var parsedUrl = url.parse(request.url);

  //parsing 된 url 중 서버 URI에 해당하는 pathname만 저장
  var resource = parsedUrl.pathname;
  // parsing 된 url 중 querystring에 해당하는 값
  let query = parsedUrl.query;
  console.log("resource path=%s", resource, query);

  //리소스에 해당하는 문자열이 같으면 클라이언트에 메시지 전달
  if (resource === "/address") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("서울");
  } else if (resource == "/phone") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("02-3545-1237");
  } else if (resource == "/name") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hong Gil Dong");
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404 Page Not Found");
  }
});

server.listen(80, () => {
  console.log("server is running");
});
