var EventEmitter = require("events");

var sec = 1;

exports.timer = new EventEmitter();

// timer 객체에 tick 이벤트 발생
setInterval(() => {
  exports.timer.emit("tick");
}, sec * 1000);
