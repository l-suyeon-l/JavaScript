// 전역변수와 지역변수
let msg = 'welcome';        // 전역변수
console.log(msg);

function sayHello(name) {
    let msg = "Hello";      // 지역변수
    console.log(msg + ' ' + name);
}

sayHello('Mike');
console.log(msg);           // 전역변수 msg 출력




// 매개변수가 없는 함수
function showError() {
    console.log("에러가 발생했습니다. 다시 시도해주세요.");
}

showError();



// 매개변수가 있는 함수 - 두 개 이상이면 쉼표로 구분
function sayHello1(name) {
    const msg = `Hello, ${name}`;
    console.log(msg);
}

sayHello1('Mike');
sayHello1('Tom');
sayHello1('Jane');


// if, 로그인하지 않아 사용자의 이름을 모른다면?
function sayHello2(name) {
    console.log(name)       // undefined
    let msg = `Hello`;
    if (name) {             // sayHello2 함수의 매개변수에 값이 들어온다면 name 넣기
        msg += `, ${name}`;
    }
    console.log(msg);
}

sayHello2("Mike");
sayHello2("Tom");
sayHello2("Jane");

sayHello2()         



// 매개변수에 값이 없다면..?
function sayHello(name) {
    let newName = name || 'friend';
    let msg = `Hello, ${newName}`
    console.log(msg)
}

sayHello();             // 함수 호출 시 매개변수가 없으면 newName == 'friend'
sayHello('Jane');


// 매개변수에 default 값 지정
function sayHello(name = 'friend') {
    let msg = `Hello, ${name}`
    console.log(msg)
}

sayHello()
sayHello('Jane')




// 함수의 리턴 값
function add(num1, num2) {
    return num1 + num2;
}

const result = add(2, 3);
console.log(result)


// 매개변수가 없는 함수의 리턴 값
function showError() {
    alert('에러가 발생했습니다.');
    return          // return문이 있으면 해당 값을 즉시 반환하고 함수 종료. 함수 종료를 목적으로 return을 붙이기도 함
    alert('이건 안나옴ㅎㅎ')
}

const result = showError();
console.log(result);            // undefined 반환
