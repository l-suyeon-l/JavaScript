// 계산된 프로퍼티(Computed Property)
let a = 'age';
const user = {
    name : 'Mike',
    [a] : 30            // 변수 a에 할당된 값이 들어감 -> age : 30
}

const user = {
    [1 + 4] = 5,
    ["안녕"+"하세요"] : "Hello"
}
// > user
// {5: 5, 안녕하세요: "Hello"}


let n = "name";
let a = "age";

const user = {
    [n] : "Mike",
    [a] : 30,
    [1 + 4] : 5
}
console.log(user);      // {name : "Mike", age : 30, 5 : 5}



function makeObj(key, val) {
    return {
        [key] : val
    }
}
const obj = makeObj('나이', 33);
console.log(obj);       // {나이 : 33}








// 객체에서 사용할 수 있는 Methods
// Object.assign(), Object.keys(), Object.values(), Object.entries(), Object.fromEntries()

// Object.assign() : 객체 복제
const user = {
    name : 'Mike',
    age : 30
}

const cloneUser = user;     // user 객체가 복제되지 않음
// user변수에는 객체 자체가 저장되어 있는 것이 아니라, 객체가 저장되어 있는 메모리 주소(객체에 대한 참조값)가 저장됨
// 따라서 cloneUser에는 객체에 대한 참조값이 복제되는 것임
// 그렇게 되면 하나의 변수에 두 객체가 접근하게 됨


// Object.assign()의 첫 번째 매개변수 : 빈 객체(초기값), 두 번째 매개변수 : 이 값이 초기값에 병합됨
const newUser = Object.assign({}, user);
// {} + {name : 'Mike', age : 30}
newUser.name = 'Tom';
console.log(newUser.name);      // 'Tom'
console.log(user.name);         // 'Mike'


Object.assign({gender:'male'}, user);
// {gender : 'male'} + {name : 'Mike', age : 30}


Object.assign({name : 'Tom'}, user);
// {name : 'Tom'} + {name : 'Mike', age : 30}   => name : 'Tom'으로 덮어쓰게 됨


const user = {
    name : 'Mike'
}
const info1 = {
    age : 30
}
const info2 = {
    gender : 'male'
}
Object.assign(user, info1, info2)       // 두 개 이상의 객체도 합칠 수 있음
// {name : 'Mike'} + {age : 30} + {gender : 'male'}
 




// Object.keys() : 키 배열 반환
const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}
Object.keys(user);
// ["name", "age", "gender"]




// Object.values() : 값 배열 반환
const user = {
    name : 'Mike',
    age : 30,
    gender : 'male',
}
Object.values(user);
// ["Mike", 30, "male"]




// Object.entries() : 객체의 키/값 배열로 반환
const user = {
    name : 'Mike',
    age : 30,
    gender : 'male'
}
Object.entries(user);
// [["name", "Mike"], ["age", 30], ["gender", "male"]]




// Object.fromEntries() : 키/값 배열을 객체로
const arr = 
[
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"]
];
Object.fromEntries(arr);
// {name : 'Mike', age : 30, gender : male}