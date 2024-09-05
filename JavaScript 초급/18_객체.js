// 객체

const superman = {      // 객체는 중괄호로 구성
    name : 'Clark',     // 키 = name, 값 = Clark
    age : 30,           // 각 프로퍼티는 쉼표로 구분
}

// 객체에 접근
console.log(superman.name);
console.log(superman['age']);   

console.log(superman);      // 객체 자체 호출


// 객체 요소 추가
superman.hairColor = 'black';
superman['hobby'] = 'football';

console.log(superman);


// 객체 요소 삭제
delete superman.age;

console.log(superman);




// Object - 단축 프로퍼티
const name = 'clark';
const age = 33;

const superman = {
    name : name,            // name, age에는 name, age 변수를 받아옴
    age : age,              // superman 객체의 name에는 name 변수가, age에는 age 변수가 들어가있음
    gender : 'male'
}

// 이렇게 쓸 수도 있음
const superman = {
    name,
    age,
    gender : 'male'
}



// Object - 프로퍼티 존재 여부 확인
const superman = {
    name : 'clark',
    age : 33
}

superman.birthDay;      // 객체에 존재하지 않는 프로퍼티에 접근하면 : undefined

// in 연산자를 사용하면 프로퍼티 존재 여부 확인 가능
// '.'이나 대괄호를 사용하면 되는데 왜 in을 쓰는지? => 어떤 값이 넘어올지 확신할 수 없을 때 사용
'birthDay' in superman; // false
'age' in superman;      // true





function makeObject(name, age) {    // 객체 형태를 리턴하는 함수(매개변수 : 이름, 나이)
    return {
        name : name,        // == name,
        age : age,          // == age,
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', 30);    // Mike라는 객체에 객체 생성
console.log(Mike);

console.log("age" in Mike);
console.log("birthday" in Mike);