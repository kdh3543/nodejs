function Clazz(msg) {
  this.name = "I am Class";
  this.message = msg;

  message2 = "find me!!";
  this.message3 = message2;
}

//Clazz 객체의 prototype을 가져와서 message값을 리턴하는 함수 추가
Clazz.prototype.getMessage = function () {
  return this.message;
};

Clazz.prototype.getMessage2 = function () {
  return this.message2;
};

let myClazz = new Clazz("good~~~!");
console.log(myClazz.getMessage());
console.log(myClazz.getMessage2());
console.log(myClazz.message3);
