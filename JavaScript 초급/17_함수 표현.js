// 함수 선언문 vs 함수 표현식
// 차이점 : 호출할 수 있는 타이밍


// 함수 선언문 - 어디서든 호출 가능
// 자바스크립트 = 인터프리터 언어 : 위에서 아래로 차례대로 한 줄씩 읽으면서 순차적으로 실행, 즉시 반환
sayHello();

function sayHello() {
    console.log('Hello');
}

sayHello();


console.log(num);
let num = 1;        // 실행 안됨
// 그런데 어떻게 sayHello()는 실행됐을까? => 자바스크립트 내부 알고리즘 때문
// 자바스크립트는 실행 전 초기화 단계에서 코드의 모든 함수 선언문을 찾아서 생성 해놓음




// 함수 표현식 - 코드에 도달하면 생성
let sayHello = function() {
    console.log('Hello');
}

sayHello();


// 화살표 함수(arrow function)
let add = function(num1, num2) {
    return num1 + num2;
}

// function이라는 함수명이 없어지고, 괄호 우측에 화살표가 생김
let add = (num1, num2) => {
    return num1 + num2;
}

// return문은 중괄호가 아닌 일반괄호로 바꿀 수 있음
let add = (num1, num2) => (
    num1 + num2;
)

// return이 한 줄이라면 괄호 생략 가능
let add = (num1, num2) => num1 + num2;

// 인수가 하나라면 괄호 생략 가능
let sayHello = name => `Hello, ${name}`;

// 인수가 없는 함수라면 괄호 생략 불가능
let showError = () => {
    alert('error!');
}

// return 전에 여러 줄의 코드가 있을 경우 중괄호->일반괄호 불가
let add = function(num1, num2) {
    const result = num1 + num2;
    return result;
}