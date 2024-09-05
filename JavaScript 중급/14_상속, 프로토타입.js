const user = {
    name : 'Mike'
}

user.hasOwnProperty('name');        // true
user.hasOwnProperty('age');         // false


// 프로토타입 : __proto__
// 찾는 값이 객체의 프로퍼티나 메소드에 있으면 탐색을 멈춤. 없으면 프로토타입에 접근함




// 상속
// 프로토타입이 어떻게 동작하는 지 알아보기 위함


// 1. 객체 ver.
const bmw = {
    color : "red",
    wheels : 4,
    navigation : 1,
    drive() {
        console.log("drive..");
    }
};

const benz = {
    color : "black",
    wheels : 4,
    drive() {
        console.log("dirve..");
    }
};

const audi = {
    color : "blue",
    wheels : 4,
    drive() {
        console.log("drive..");
    }
};




// 동일한 wheels, drive 부분을 프로토타입으로 해결할 수 있음
const car = {
    wheels : 4,
    drive() {
        console.log("drive..");
    }
};

const bmw = {
    color : "red",
    navigation : 1
};

const benz = {
    color : "black"
};

const audi = {
    color : "blue"
};


bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;
// car 객체가 bmw, benz, audi의 프로토타입이 됨
// bmw, benz, audi는 car의 상속을 받음


const x5 = {
    color : "white",
    name : "x5"
};

x5.__proto__ = bmw;

console.log(x5.name);           // x5
console.log(x5.color);          // white : x5 객체 자체 내부에 color 프로퍼티가 있기 때문에 x5에서 탐색을 멈춤
console.log(x5.navigation);     // 1 : x5 객체 내부에 navigation 프로퍼티가 없어 상속받은 bmw 객체에서 navigation 탐색을 멈춤
console.log(x5.drive);          // "drive.." : x5 객체 내부에 drive 프로퍼티가 없어 상속받은 bmw 객체에서 drive 프로퍼티를 찾고, 없기 때문에 bmw가 상속받은 프로퍼티 car에서 drive 탐색을 멈춤
                                // 프로토타입 체인 (Prototype Chain)


for (p in x5) {
    console.log(p)
}
// color
// name
// navigation
// wheels
// drive


Object.keys(x5);        // ["color", "name"]
Object.values(x5);      // ["white", "x5"]
// key, value와 관련된 객체 내장 메소드는 상속된 프로퍼티를 반영하지 않음



for (p in x5) {
    if (x5.hasOwnProperty(p)) {
        console.log('o', p);
    } else {
        console.log('x', p);
    }
}






// 2. 생성자 함수 ver.
const car = {
    wheels : 4,
    drive() {
        console.log("drive..")
    }
}

const Bmw = function (color) {
    this.color = color;
    // this.wheels = 4;
    // this.drive = function () {
    //     console.log("drive..");
    // };
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

x5.__proto__ = car;
z4.__proto__ = car;
// 너무 복잡함!! 그렇다면...







const Bmw = function (color) {
    this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = fucntion() {
    console.log("drive..");
}

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

