var http = require("http");

//요청한 url을 객체로 만들기 위해
var url = require("url");

//요청한 url 중 query sting을 객체로 만들기위해 querystring 모듈 사용
var querystring = require("querystring");

var server = http.createServer(function (request, response) {
  console.log("--- log start ---");
  //브라우저에서 요청한 주소를 parsing하여 객체화
  var parsedUrl = url.parse(request.url);
  console.log("url~??,", parsedUrl);
  //객체화된 url 중 query string 부분만 따로 객체화
  var parsedQuery = querystring.parse(parsedUrl.query, "&", "=");
  console.log(parsedQuery);
  console.log("--- log end ---");
  response.writeHead(200, { "Content-Type": "text/html", Encoding: "utf-8" });
  response.end("var1의 값은 " + parsedQuery.var1);
});

server.listen(8080, function () {
  console.log("server is running");
});

// console이 두번 출력되는 이유 --> 기본적으로 표시되는 favicon이라는 아이콘을 브라우저에서 요청하였기 때문
