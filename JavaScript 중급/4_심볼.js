// property key : 문자형
const obj = {
    1 : '1입니다.',
    false : '거짓'
}
Object.keys(obj);
// ["1", "false"]

obj['1']        // "1입니다."
obj['false']    // "거짓"



// Symbol : 유일성 보장
const a = Symbol();     // new를 붙이지 않음
const b = Symbol();

console.log(a)
Symbol()

console.log(b)
Symbol()

// a === b : false
// a == b : false


const id = Symbol('id');
const id2 = Symbol('id');

// > id : Symbol(id)
// > id2 : Symbol(id)

// id === id2 : false
// id == id2 : false



// property key : 심볼형
const id = Symbol('id');
const user = {
    name : 'Mike',
    age : 30,
    [id] : 'myid'       // computed property 키로 심볼형 변수 id를 넣음
}

// > user : {name : "Mike", age : 30, Symbol(id) : "myid"}
user[id]                // 'myid'
Object.keys(user);      // ["name", "age"]
// Object.keys(), Object.values(), Objects.entries()는 키가 심볼형인 프로퍼티는 건너 뜀



// Symbol.for() : 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for 메소드는 하나를 생성한 디 키를 통해 같은 Symbol을 공유함
const id1 = Symbol.for('id');
const id2 = Symbol.for('id');
// id1 === id2; : true
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
Object.getOwnPropertySymbols(user);     // [Symbol(id)]
Reflect.ownKeys(user);                  // ["name", "age", Symbol(id)]




