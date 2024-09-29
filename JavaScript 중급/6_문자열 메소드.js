// '(작은 따옴표), "(큰 따옴표), `(벡틱)

// html 코드를 작성할 때에는 속성(""로 된 내용 존재) 때문에 작은 따옴표로 작성하는 것이 좋다.
let html = '<div class="box_title">제목 영역</div>';

// 영어를 작성할 때에는 큰 따옴표로 작성하는 게 좋다.
let desc = "It's 3 o'clock."

// 벡틱은 ${}를 통해 변수를 표현하거나 표현식을 쓸 수 있다.
let name = 'Mike';
let result = `My name is ${name}.`;     // My name is Mike.
let add = `2 더하기 3은 ${2+3}입니다.`  // 2 더하기 3은 5입니다.

// 벡틱은 여러줄을 포함할 수 있다.
let desc = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`;

let desc = '오늘은 맑고 화창한 \n날씨가 계속 되겠습니다.';

let desc = '오늘은 맑고 화창한      // error
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.';



// length : 문자열 길이
let desc = '안녕하세요.';
desc.length;    // 6
// 회원가입할 때 아이디나 비밀번호의 글자 수를 제한할 때 사용한다.

desc[2]     // '하'
// 문자열도 배열처럼 인덱스를 통해 특정 위치의 문자에 접근할 수 있다.

desc[4] = '용';
console.log(desc);  // 안녕하세요
// 하지만 특정 문자만 바꾸는 것은 불가능하다



// toUpperCase() / toLowerCase()
let desc = "Hi guys. Nice to meet you.";

desc.toUpperCase();     // HI GUYS. NICE TO MEET YOU.
desc.toLowerCase();     // hi guys. nice to meet you.



// indexOf(text) : 문자를 인수로 받아 몇번째에 위치하는 지 반환
desc.indexOf('to');     // 14
desc.indexOf('man');    // -1 : 찾는 문자가 없을 때

if (desc.indexOf('Hi')) {       // Hi는 0번째에 위치해있기 때문에 if문이 실행되지 않는다
    console.log('Hi가 포함된 문장입니다.');
}

if (desc.indexOf('Hi') > -1) {  // -1보다 크다는 조건을 붙여줘야 함.
    console.log('Hi가 포함된 문장입니다.');
}



// slice(n, m)  n : 시작점 / m : 없으면 문자열 끝까지, 양수면 그 숫자까지(포함하지 않음), 음수면 끝에서부터
let desc = "abcdefg";

desc.slice(2);      // "cdefg"
desc.slice(0, 5);   // "abcde"
desc.slice(2, -2);  // "cde"



// substring(n, m) : n과 m 사이 문자열 반환, n과 m을 바꿔도 동작함, 음수는 0으로 인식
desc.substring(2, 5);   // "cde"
desc.substring(5, 2);   // "cde"



// substr(n, m) : n부터 시작, m개를 가져옴, 
desc.substr(2, 4);      // "cdef"
desc.substr(-4, 2);     // "de"



// trim() : 앞뒤 공백 제거
let desc = "  coding       ";
desc.trim();    // "coding"



// 문자열 비교
1 < 3       // true
"a" < "c"   // true

"a".codePointAt(0);         // 97
String.fromCodePoint(97);   // "a"

let list = [
    "01. 들어가며", 
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열"
];

let newList = [];

for (let i = 0; i < list.length; i++) {
    newList.push(list[i].slice(4));
}

console.log(newList);



/* 금칙어 : 콜라 */
function hasCola(str) {
    if(str.indexOf('콜라') > -1) {
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
}

hasCola('사이다가 짱이야!');        // -1
hasCola('콜라');                   // 0
hasCola('콜라가 짱이야!');          // 0



// includes : 문자가 있으면 true, 없으면 false 반환
function hasCola(str) {
    if (str.includes("콜라")) {
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
}

hasCola('사이다가 짱이야!');        // -1
hasCola('콜라');                   // 0
hasCola('콜라가 짱이야!');          // 0