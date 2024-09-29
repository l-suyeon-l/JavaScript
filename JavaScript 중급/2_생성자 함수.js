// 객체 리터럴
let user = {
    name : 'Mike',
    age : 30,
}


// 비슷한 객체를 여러 개 만들어야하는 상황이 생김. 이럴 때 쓸 수 있는 것이 바로
// 생성자 함수

function User(name, age) {      // 생성자 함수의 첫글자는 보통 대문자
    // this = {}

    this.name = name;
    this.age = age;             // 이름과 나이를 인자로 받아 this에 대입해주고 있음

    // return this;
}

// new 연산자를 이용해 함수 호출
let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tome', 17);       // 각각 다른 변수명을 사용해 다른 인수들을 전달 받음



function User2(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {     // 메소드 추가
        console.log(this.name)
    }
}

let user4 = new User2('Han', 40);
user4.sayName();    // 'Han'




function Item(title, price) {
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function() {
        console.log(`가격은 ${price}원 입니다.`)
    }
    // return this;
}

const item1 = new Item('인형', 3000);
const item2 = Item('가방', 4000);   // new를 안붙이면 함수를 실행해주는 것과 같은데, Item함수는 리턴해주는 값이 없기 때문에 item2에는 undefined가 할당됨
const item3 = new Item('지갑', 9000);   // 따라서 생성자 함수는 new를 붙여줘야 한다.

item1.showPrice();  // 3000
console.log(item1, item2, item3);       // item들의 생성자형 title, price, showPrice가 표시됨