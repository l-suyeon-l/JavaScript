// Object - method : 객체 프로퍼티로 할당 된 함수
const superman = {
    name : 'clark',
    age : 33,
    fly : function() {      // fly()로도 표현 가능      // fly() 함수가 superman 객체의 method이다
        console.log('날아갑니다.')
    }
}

superman.fly()  // 날아갑니다.



const user = {
    name : 'Mike',
    sayHello : function() {     // user 객체에는 sayHello라는 method를 갖고 있음.
        console.log(`Hello, I'm ${user.name}`)      // method에 객체의 name 프로퍼티를 사용하고 싶으면? user.name => 문제 발생.
    },
    sayHello2 : function() {
        console.log(`Hello, I'm ${this.name}`)
    }
}


sayHello : function() {
    console.log(`Hello, I'm ${this.name}`)
}

let boy = {
    name : 'Mike',
    sayHello
}

let girl = {
    name : 'Jane',
    sayHello
}

boy.sayHello();     // I'm Mike
girl.sayHello();    // I'm Jane
// boy 객체의 sayHello()의 this는 Mike가 된 것임
// girl 객체의 sayHello()의 this는 Jane이 된 것임


// 이때까지의 동작을 화살표 함수로 진행한다면 동작이 달라짐
// 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
// 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴

let boy = {
    name : "Mike",
    showName : function() {         // 화살표 함수로 method를 작성하면 this는 boy를 가리키는 것이 아닌 window를 가리키게 됨
        console.log(this.name)
    }
};

let man = boy;

man.name = "Tom"
console.log(man.name)           // Tom
// console.log(boy.name);       // "Tom"

boy = null;         // boy 객체 삭제. man 객체로만 접근 가능
man.showName();     // showName 함수에서 boy.name으로 출력시킨다면, boy가 null일 때 boy의 특성을 받은 man 객체에서도 출력할 수 없음     