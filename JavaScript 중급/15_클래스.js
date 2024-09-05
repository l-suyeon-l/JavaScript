// 지금까지는 비슷한 객체를 생성하기 위해 생성자 함수를 사용함
// 생성자 함수
const User = function(name, age) {
    this.name = name;
    this.age = age;
    this.showName = function() {
        console.log(this.name);
    };
};

const mike = new User("Mike", 30);


// 클래스 : ES6에 추가된 스펙
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);
// new를 통해 호출했을 때, 내부에서 정의된 내용으로 객체를 생성하는 것은 동일
// 차이점
// 1. 클래스라는 키워드을 사용함
// 2. 내부에 constructor가 있음 : 객체를 만들어주는 생성자 메세지. 인수를 넘겨받아 객체에 프로퍼티를 만들 수 있음
// 3. showName()처럼 클래스 내에 정의한 메소드는 User2의 프로토타입을 저장함

// mike는 객체 내부에 showName()이, tom은 프로토타입 내부에 showName()이 존재함
// 사용법은 동일함
console.log(mike.showName());
console.log(tom.showName());





const User = function(name, age) {
    this.name = name;
    this.age = age;
    // this.showName = function() {
    //     console.log(this.name);
    // };
};

User.prototype.showName = function() {
    console.log(this.name);
};
// 위처럼 생성자 함수로도 프로토타입 내부에 메소드를 넣을 수 있음




const jane = User("Jane", 19);      // new가 없어도 정상적으로 실행됨, but undefined 출력
const anna = User2("Anna", 32);     // new가 없으면 오류가 발생함

// 프로토타입 내부의 constructor을 보면, User2에는 클래스라고 명시되어 있음








// 상속 : extends

class Car {
    constructor(color) {        
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive");
    }
    stop() {
        console.log("stop");
    }
}

class Bmw extends Car {
    park() {
        console.log("PARK");
    }
}

const z4 = new Bmw("blue");
// top class에서 선언한 color, wheels는 가장 위에
// 클래스 내부에서 선언한 메소드 park는 프로토타입 밑으로 들어감
// drive, stop은 프로토타입의 프로토타입에 들어감 <= 상속과 프로토타입 영상 보기






// 메소드 오버라이딩(method overriding)

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive");
    }
    stop() {
        console.log("stop");
    }
}

class Bmw extends Car {
    park() {
        console.log("PARK");
    }
    // Bmw 내부에 Car에서 정의한 메소드와 동일한 메소드가 있다면?
    stop() {
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");     // 동일한 이름의 메소드가 정의된다면 덮어쓰게 된다.(OFF)


// >> 부모의 메소드를 그대로 사용하면서 확장하고 싶을 때에는?
// 'super' 키워드 사용

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive");
    }
    stop() {
        console.log("stop");
    }
}

class Bmw extends Car {
    park() {
        console.log("PARK");
    }
    stop() {
        super.stop();           // Car의 stop() 메소드 사용
        console.log("OFF")
    }
}

const z4 = new Bmw("blue");     // stop \n OFF








// 상속 오버라이딩(overriding)

class Car {
    constructor(color) {        // 클래스의 contructor에서는 빈 객체{}를 만들어주고 this로 해당 객체를 가리킴
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive");
    }
    stop() {
        console.log("stop");
    }
}

class Bmw extends Car {         
    constructor(color) {            // extends를 통해 만든 자식 클래스는 빈 객체 생성&this 작업 건너뜀. 자식 클래스의 constructor에도 동일한 인수를 받도록 해야함
        super(color);               // 상속 클래스에서 constructor을 사용하려면 부모 클래스의 constructor을 먼저 호출해야함
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    }
}

// const z4 = new Bmw("blue");