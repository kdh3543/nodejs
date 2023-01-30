// fs(파일 시스템) 모듈 사용
var fs = require("fs");

// 비동기 방식 파일읽기. 파일 읽은 후 마지막 파라미터에 넘긴 callback 함수가 호출
fs.readFile("home.js", "utf-8", (error, data) => {
  console.log("01 readAsync: %s", data);
});

// 동기방식의 파일일기. 파일 읽은 후 data 변수에 저장
let data = fs.readFileSync("home.js", "utf-8");
console.log("02 readSync: %s", data);
