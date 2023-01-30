function Clazz(msg) {
  this.name = "I am Class";
  this.message = msg;

  message2 = "find me";
  this.print = function () {
    console.log(message2);
  };
}

let myClazz = new Clazz("good to see u");
// this를 사용한 변수는 외부 참조 가능
console.log(myClazz.message); // result ==> good to see u

// this를 사용하지 않은 message2는 외부에서 참조 불가
console.log(myClazz.message2); // result ==> undefined
myClazz.print(); // result ==> find me

// 클래스 변수 및 함수를 외부에서 사용하고 싶으면 this사용
// this 사용하면 내부에 있는 this를 사용하지 않은 함수나 변수 사용 가능
