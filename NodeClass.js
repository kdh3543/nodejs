function Clazz() {
  this.name = "Hello there";
  this.message;
}

//message 변수에 값을 입력하는 함수
Clazz.prototype.setMessage = function (msg) {
  this.message = msg;
};

//message 변수의 값을 가져오는 함수
Clazz.prototype.getMessage = function () {
  return this.message;
};

//exports 명령어를 사용해 다른 파일에서 Clazz 객체를 사용할 수 있게 됨
module.exports = Clazz;
