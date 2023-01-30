let NodeClass = require("./NodeClass");

// new 연산자를 이용 NodeClass 클래스를 nodeClass 변수로 초기화시킴
let nodeClass = new NodeClass();

// setMessage 함수로 값 입력
nodeClass.setMessage("here we go!!!");

// 입력된 값 출력
console.log(nodeClass.getMessage());
