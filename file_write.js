let fs = require("fs");

// 새로 생성할 파일에 입력될 문자열
let data = "My first data...\r\nhello there!";

// 비동기 방식으로 파일 생성. 함수의 인자는 앞에서부터 순서대로 파일명, 입력데이터, 인코딩, 콜백함수
fs.writeFile("file01_async.txt", data, "utf-8", (e) => {
  if (e) {
    console.log(e);
  } else {
    console.log("01 write done", data);
  }
});

// 동기방식은 callback 함수를 통한 오류처리 불가 try catch 문 사용
try {
  fs.writeFileSync("file02_sync.txt", data, "utf-8");
  console.log("02 write done", data);
} catch (e) {
  console.log(e);
}
