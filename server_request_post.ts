var http = require("http");
var querystring = require("querystring");

var server = http.createServer(function (request, response) {
  var postdata = "test";
  request.on("data", function (data) {
    postdata = postdata + data;
  });

  request.on("end", function () {
    var parsedQuery = querystring.parse(postdata);
    console.log(parsedQuery);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("var1의 값 = " + postdata);
  });
});

server.listen(8080, function () {
  console.log("server running....");
});

// post 부분의 가장 특징적인 부분은 event cjfl
// node js 는 비동기 event 방식으로 데이터 처리
