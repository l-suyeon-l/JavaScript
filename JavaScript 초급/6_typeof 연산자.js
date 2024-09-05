// typeof 연산자 : 변수의 자료형을 알아낼 수 있음

const name = "Mike";

console.log(typeof 3);          // number
console.log(typeof name);       // string
console.log(typeof true);       // boolean
console.log(typeof "xxx");      // string
console.log(typeof null);       // object : 객체형★
console.log(typeof undefined);  // undefined


/* 다른 개발자가 선언한 변수의 타입을 알아야하거나, API 통신을 통해 받아온 데이터를 타입에 따라 다른 방식으로 처리해아할 때 사용됨 */