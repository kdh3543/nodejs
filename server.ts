//웹 서버를 실행하기 위해 http 모듈을 불러옴
var http = require("http");

//http 모듈에 createServer 함수로 서버 실행, createServer()에 파라미터로 입력되는 함수는 함수명 x
//res 객체는 서버로 웹브라우저 또는 앱으로부터 요청이 올 때 반환하는 객체
//req 사용자가 요청한 내용이 담긴 객체
//writeHead()함수에 200이라는 숫자값과 중괄호 안에 {키:값} 형태의 값을 담음
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("hello world~!!!!");
});

server.listen(8080, () => {
  console.log("server is running");
});
