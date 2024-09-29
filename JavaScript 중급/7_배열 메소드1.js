// push() : 뒤에 삽입
// push() : 뒤에 삭제
// unshift() : 앞에 삽입
// shift() : 앞에 삭제



// splice(n, m) : 특정 요소 지음
// n 시작 / m 개수
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);   // 인덱스 1번부터 2개 지움

console.log(arr);   // [1, 4, 5]



// splice(n, m, x) : 특정 요소 지우고 추가
arr.splice(1, 3, 100, 200);     // 인덱스 1번부터 3개 지우고 100, 200 넣기
console.log(arr);               // [1, 100, 200, 5]

let arr = ["나는", "철수", "입니다"];
arr.splice(1, 0, "대한민국", "소방관");     // 인덱스 1번에서 아무것도 지우지 않고 인덱스 1 자리에 새로운 요소 추가



// splice() : 삭제된 요소 반환
let result = arr.splice(1, 2);      // 메소드를 사용할 때 삭제된 요소의 배열 값 반환

console.log(arr);       // [1, 4, 5]
console.log(result);    // [2, 3]



// slice(n, m) : n부터 m - 1까지 반환
let arr = [1, 2, 3, 4, 5];
arr.slice(1, 4);            // [2, 3, 4]

let arr2 = arr.slice();     // 인수에 아무것도 넣지 않으면 배열 복사
console.log(arr2);          // [1, 2, 3, 4, 5]



// concat(arr2, arr3 ..) : 합쳐서 새 배열 반환
let arr = [1, 2];
arr.concat([3, 4]);             // [1, 2, 3, 4]
arr.concat([3, 4], [5, 6]);     // [1, 2, 3, 4, 5, 6]
arr.concat([3, 4], 5, 6);       // [1, 2, 3, 4, 5, 6]



// forEach(fn) : 배열 반복. 첫번째 인수는 해당 요소, 두번째 인수는 인덱스, 세번째 인수는 해당 배열 자체
let users = ['Mike', 'Tom', 'Jane'];
users.forEach((name, index) => {
    console.log(`${index + 1} ${name}`);
})



// indexOf / lastIndexOf
let arr = [1, 2, 3, 4, 5, 1, 2, 3];
arr.indexOf(3);     // 2 (값 3의 인덱스가 2)
arr.indexOf(3, 3)   // 7 (인덱스 3 이후의 값 3 인덱스가 7)
arr.lastIndexOf(3); // 7 (끝에서 첫번째로 만나는 값 3의 인덱스가 7)



// includes() : 배열 내에 값을 포함하고 있으면 true, 없으면 false
let arr = [1, 2, 3];
arr.includes(2);    // true
arr.includes(8);    // false



// find(fn) : 첫번째 true 값만 반환하고 끝. 만약 없으면 undefined를 반환
// findIndex(fn) : 해당 인덱스를 반환. 없으면 undefined를 반환
let arr = [1, 2, 3, 4, 5];
const result = arr.find((item) => {
    return item % 2 === 0;
})
console.log(result);    // 2   <= 첫번째 짝수(true)만 반환하고 멈춤


let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10}
];


const result = userList.find((user) => {
    if(user.age < 19) {
        return true;
    }
    return false;
});
console.log(result);    // { name: "Tom", age: 10 }   <= 19살 미만인 첫번째 프로퍼티가 Tom


const result = userList.findIndex((user) => {
    if(user.age < 19) {
        return true;
    }
    return false;
});
console.log(result);    // 2   <= 19살 미만인 첫번째 프로퍼티의 인덱스가 2



// filter(fn) : 만족하는 모든 요소를 배열로 반환
// find&findIndex는 가장 첫 한 요소만 반환하기 때문에 모든 요소를 찾을 때에는 filter() 사용
const arr = [1, 2, 3, 4, 5, 6];

const result = arr.filter((item) => {
    return item % 2 === 0;
});
console.log(result);