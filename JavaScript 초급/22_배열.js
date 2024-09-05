// 배열(array) : 순서가 있는 리스트

let students = ['철수', '영희', '영수'];

console.log(students[0]);   // 철수
console.log(students[1]);   // 영희
console.log(students[29]);  // 영수

students[0] = '민정';
console.log(students)       // ['민정', '영희', '영수']



// 배열의 특징

// 배열은 문자형 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
let arr = [
    '민수',
    3,
    false,
    {
        name : 'Mike',
        age : 30
    },
    function() {
        console.log('TEST');
    }
]

// length : 배열의 길이
students.length;        //3 30


// 배열의 method
// push() : 배열 끝에 추가
let days = ['월', '화', '수'];
days.push('목')
console.log(days)   // ['월', '화', '수', '목']

// pop() : 배열 끝 요소 제거
let days = ['월', '화', '수'];
days.pop()
console.log(days)   // ['월', '화']

// shift() : 배열 앞을 제거
days.shift();
console.log(days)   // ['월', '화', '수']

// unshift() : 배열 앞을 추가
days.unshift('일');
console.log(days)   // ['일', '월', '화', '수']

// push()와 unshift()는 여러 요소를 한 번에 추가 가능
days.unshift('금', '토', '일');
console.log(days)   // ['금', '토', '일', '월', '화', '수']



// 반복문 : for
let days = ['월', '화', '수'];

for (let days = 0; index < days.length; index++) {
    console.log(days[index])
}


// 반복문 : for ... of
// 객체를 순회하는 for ... in와 혼동 불가. for...in 사용은 장점보다 단점이 많음
let days = ['월', '화', '수'];

for (let day of days) {     // for문보다는 간단하지만 index를 얻지 못함
    console.log(day)        
}






// 실습
let days = ['mon', 'tue', 'wed'];

days.push("thu");
days.unshift("sun");

for (let index = 0; index < days.length; index++) {
    console.log(days[index])
}

for (let day of days) {
    console.log(day)
}