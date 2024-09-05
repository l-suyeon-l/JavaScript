// 객체 : 하나의 이름에 여러 종류의 값을 넣을 수 있게 함
const dog = {
    name : '멍멍이',    // 키 : 원하는 값
    age : 2
};

console.log(dog.name);
console.log(dog.age);


const sample = {
    'key with space' : true     // 키에 공백이 있으면 따옴표로 감싸서 문자열로 넣어줌
};


const ironMan = {
    name : '토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
};

const captainAmerica = {
    name : '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);



function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print(captainAmerica);




// 객체 비구조화 할당
// 나중에



// 객체 안에 함수 넣기
const dog2 = {
    name : '멍멍이',
    sound : '멍멍!',
    say : function() {
        console.log(this.sound);    // 이 객체 안에 있는 sound
    }
};

dog2.say();
// 객체 안에 함수를 넣는다면, 화살표 함수로 선언하면 안된다
// 화살표 함수에서는 this가 자신이 속한 객체를 가르키지 않기 때문



// Getter 함수
// const numbers = {
//     a : 1,
//     b : 2,
//     get sum() {
//         console.log('sum 함수가 실행됩니다!');
//         return this.a + this.b;
//     }
// };

// console.log(numbers.sum);
// numbers.b = 5;
// console.log(numbers.sum);



// Setter 함수
const numbers = {
    _a : 1,
    _b : 2,         // 변수명 앞에 _ : 이 함수 내에서만 접근 가능
    sum : 3,
    calculate() {           // a + b 계산
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {               // a 값을 get(함수 외부에서)
        return this._a;
    },
    get b() {               // b 값을 get(함수 외부에서)
        return this._b;
    },
    set a(value) {          // a 값을 value로 set(함수 외부에서)
        console.log('a가 바뀝니다.');
        this._a = value;
        this.calculate();
    },
    set b(value) {          // b 값을 value로 set(함수 외부에서)
        console.log('b가 바뀝니다.');
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);