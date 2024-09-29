// 1. property의 key : 문자형
const obj = {
    1 : '1입니다.',
    false : '거짓'
}
Object.keys(obj);
// ["1", "false"] <= 문자형으로 반환됨

// 접근할 때에도 문자형으로 접근 가능
obj['1']        // "1입니다."
obj['false']    // "거짓"



// Symbol : 유일한 식별자를 생성함(유일성 보장)
const a = Symbol();     // new를 붙이지 않음
const b = Symbol();

console.log(a)
Symbol()

console.log(b)
Symbol()

// a === b : false
// a == b : false


const id = Symbol('id');    // 괄호 내에 설명을 붙여줄 수 있음. 디버깅할 때 편해진다
const id2 = Symbol('id');

// > id : Symbol(id)
// > id2 : Symbol(id)

// id === id2 : false
// id == id2 : false

ㅑ

// 2. property의 key : 심볼형
const id = Symbol('id');    
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'       // computed property 키로 심볼형 변수 id를 넣음
}

// > user : {name : "Mike", age : 30, Symbol(id) : "myid"}
user[id]                // 'myid'
Object.keys(user);      // ["name", "age"]
// Object.keys(), Object.values(), Objects.entries(), for(let a in user){} 는 키가 심볼형인 프로퍼티는 출력하지 않음
// 그럼 이렇게 꽁꽁 숨겨져있는 기능을 어디에 쓸까?
// 특정 개체의 원본 데이터를 건들이지 않으면서 속성을 추가할 수 있음.

const user = {
    name : 'Mike',
    age : 30
}
const id = Symbol('id');
user[id] = 'myid';

user.name = 'myname';               // 다른 사람이 생성한 프로퍼티를 함부로 접근해서 수정해서는 안된다
user.a_key_no_one_used = 'hahaha';  // 그렇다고 해서 프로퍼티를 길거나 이상한 내용으로 설정하는 것은 좋지 않다
// Object.keys()나 for(let .. in ..){}로 순회할 수 있기 때문이다



// Symbol.for() : 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고 있으면 가져오기 때문
// Symbol() 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유함
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
// id1 === id2; : true

// Symbol.keyFor() : 매개변수 안에 변수를 넣어주면 해당 변수를 생성할 때 적어주었던 이름을 알려줌
Symbol.keyFor(id1)      // 'id'

// 전역 심볼이 아닌 심볼은 Symbol.keyFor()은 사용할 수 없고, description 사용 가능
const id = Symbol('id 입니다.');
id.description;     // 'id 입니다.'

// 숨겨진 Symbol key 보는 법
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'
}
Object.getOwnPropertySymbols(user);     // [Symbol(id)] : 심볼들만 볼 수 있음
Reflect.ownKeys(user);                  // ["name", "age", Symbol(id)] : 심볼을 포함한 객체의 모든 키를 보여줌



// 실습
// 다른 개발자가 만들어 놓은 객체
const user = {
    name : "Mike",
    age : 30
};

// 내가 작업한 객체
user.showName = function() {};      // 사용자가 접속하면 "His showName is function() {}" 라고 콘솔창에 표시된다.

const showName = Symbol('show name');
user[showName] = function() {
    console.log(this.name);         // symbol()로 만들었기 때문에 for... in 문에서 출력되지 않는다.
}

user[showName]();                   // Mike

// 사용자가 접속하면 보는 메세지
for (let key in user) {
    console.log(`His ${key} is ${user[key]}.`);
}