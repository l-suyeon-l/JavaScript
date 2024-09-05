// 변수 let, const는 ES6 이후에, 이전에는 var 사용
// var와 let은 크게 다르지 않음. but 차이점은?







// var은 한 번 선언된 변수를 다시 선언할 수 있다.
var name = 'Mike';
console.log(name);      // Mike

var name = 'Jane';
console.log(name);      // Jane


// let은 한 번선언된 변수는 다시 선언할 수 없다.
let name = 'Mike';
console.log(name);      // Mike

let name = 'Jane';
console.log(name);      // Error







// var는 선언하기 전에 사용할 수 있다.
console.log(name);      // undefined
var name = 'Mike';

// 실제로는
var name;
console.log(name);
name = 'Mike';
// 와 같이 동작한다. var로 선언한 모든 변수는 코드가 실제로 이동하지 않지만 최상위로 끌어올려진 것처럼 동작함.
// 이를 호이스팅(hoisting)이라고 한다

// but, console은 undefined라고 호출함
// 선언(name)은 호이스팅되지만, 할당('Mike')은 호이스팅되지 않기 때문이다


// let은 선언하기 전에 사용할 수 없다.
console.log(name);      // ReferenceError
let name = 'Mike';
// let, const도 호이스팅됨.
// 호이스팅은 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동함.
// 그런데 why?

// TDZ(Temporal Dead Zone) 때문이다.
console.log(name);          // Temporal Dead Zone
const name = "Mike";        // 함수 선언 및 할당
console.log(name);          // 사용 가능
// let, const는 TDZ 영역의 영향을 받음. 할당하기 전에는 사용할 수 없음
// 이는 코드를 예측가능하게 하고 잠재적인 버그를 예방



let age = 30;
function showAge() {
    console.log(age);

    let age = 20;       // 함수 내부에서 호이스팅을 발생시킴

}
showAge();




// 변수의 생성과정
// 1. 선언 단계
// 2. 초기화 단계 : undefined를 할당해주는 단계
// 3. 할당 단계

// var는 선언과 초기화 단계가 동시에 발생함. 할당 전에 호출되면 에러가 아닌 undefined가 호출됨
// let은 선언 후에 초기화 단계가 발생함. 호이스팅되면서 선언 단계가 이루어지는데 초기화가 이루어지지 않아 ReferenceError가 발생함
// const는 선언 + 초기화 + 할당이 동시에 발생함. 선언하면서 할당하지 않으면 에러가 발생함





// 스코프
// var : 함수 스코프(function-scoped)
// let, const : 블록 스코프(block-scoped)

// 블록 스코프(block-scoped) : 모든 코드 블록에서 선언된 변수는 코드 블록 내에서만 유효하며, 외부에서는 접근할 수 없음. 즉, 코드 블록 내부에서 선언한 변수는 지역변수라는 뜻이다. 여기서 언급한 코드블록은 함수, if문, for문, while문, try/cathc문을 의미함
function add() {
    // Block-level Scope
}

if() {
    // Block-level Scope
}

for(let i = 0; i < 10; i++) {
    // Block-level Scope
}


// 함수 스코프(function-scoped) : 함수 내에서 선언된 변수만 그 지역변수가 되는 것
const age = 30;

if(age > 19) {
    var txt = "성인";
}
console.log(txt);       // if문 내에서 선언된 변수(var)가 if문 외부에서 사용 가능함



function add(num1, num2) {      // var 변수가 유일하게 벗어날 수 없는 스코프가 함수(function) 스코프이다.
    var result = num1 + num2;
}

add(2, 3);
console.log(result);