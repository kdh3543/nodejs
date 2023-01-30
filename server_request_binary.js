let http = require("http");
let url = require("url");
let fs = require("fs");

// mime 모듈 추가
// 이미지 파일마다 확장자에 따라 mime type이 다르기 때문에 mime 모듈을 사용하여 mime type 확인
let mime = require("mime");

let server = http.createServer((request, response) => {
  let parsedUrl = url.parse(request.url);
  let resource = parsedUrl.pathname;
  console.log(resource);
  if (resource.indexOf("/images/") === 0) {
    // 첫글자인 '/'를 제외하고 경로를 imgPath변수에 저장

    let imgPath = resource.substring(1);
    console.log("imgPath=" + imgPath);

    // 서비스 파일의 mime type
    let imgMime = mime.getType(imgPath);
    console.log("imgMime= " + imgMime);

    fs.readFile(imgPath, (error, data) => {
      if (error) {
        response.writeHead(500, { "Content-Type": "text/html" });
        response.end("500 Internal server" + error);
      } else {
        // Content-Type에 mime type 입력 ==> Content-Type : image/png
        response.writeHead(200, { "Content-Type": imgMime });
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404 Page Not Found");
  }
});

server.listen(80, () => {
  console.log("server");
});
