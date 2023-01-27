var module = require("./custom_module_timer");

// module 내부에 선언된 timer 객체를 통해 이벤트 캐치 후 시간 출력
module.timer.on("tick", (time) => {
  var time = new Date();
  console.log("now" + time);
});
