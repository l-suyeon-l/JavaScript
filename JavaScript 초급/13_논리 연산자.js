// 논리 연산자
// || (OR) : 여러 개 중 하나라도 true이면 true. 모든 값이 false이면 false 반환
// && (AND) : 모든 값이 true이면 true. 하나라도 false이면 false 반환
// ! (NOT) : true면 false 반환, false면 true 반환


/* OR */
// 1. 이름이 TOM이거나 성인이면 통과

// const name = "Mike";
// const age = 30;

// if (name == "Tom" || age > 19) {
//     console.log('통과');
// }



/* AND */
// 2. 이름이 Mike이고, 성인이면 통과

// const name = "Mike";
// const age = 30;

// if (name == "Mike" && age> 19) {
//     console.log('통과');
// } else {
//     console.log('돌아가');
// }





/* NOT */
// 1. 나이를 입력받아 성인이 아니면 돌아가라고..

// const age = prompt("나이가..?");
// const isAdult = age > 19;

// if (!isAdult) {
//     console.age('돌아가');
// }





/* 우선순위 */
// 남자이고, 이름이 Mike이거나 성인이면 통과

const gender = "F";
const name = "Jane";
const isAdult = true;

// (gender == "M" && name == "Mike" || isAdult) == ((gender == "M" && name == "Mike") || isAdult)
if (gender == "M" && (name == "Mike" || isAdult)) {     // And가 Or보다 우선순위가 높기 때문에 괄호를 적절히 사용해야 함
    console.log('통과')
} else {
    console.log('돌아가.')
}