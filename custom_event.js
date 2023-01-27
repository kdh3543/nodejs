//EventEmitter -- 모든 이벤트 처리가 정의된 기본 객체, 이벤트를 사용하기 위해서 이 객체를 재정의해서 사용해야함
//on() -- 이벤트를 연결하는 함수
//emit() -- 이벤트를 발생시키는 함수

// 이벤트가 정의되어 있는 events 모듈 생성
var EventEmitter = require("events");

// 생성된 이벤트 모듈을 사용하기 위해 custom_object로 초기화
var custom_object = new EventEmitter();

// events모듈에 선언되어 있는 on() 함수를 재정의하여 'call' 이벤트 처리
custom_object.on("call", () => {
  console.log("called events");
});

custom_object.emit("call");
