function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);



function hello(name) {
    // console.log("Hello, " + name + "!");
    console.log(`Hello, ${name}!`);
}
hello('velopert');



function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
const grade = getGrade(90);
console.log(grade);



/* 화살표 함수 */
const add = (a, b) => {
    return a + b;
};
console.log(add(1, 2));
// 화살표 좌측 : 함수의 파라미터
// 화살표 우측 : 코드 블록

// if,, 코드 블록 내부에서 바로 return하는 경우 줄일 수 있음
const add2 = (a, b) => a + b;
console.log(add2(1, 2));