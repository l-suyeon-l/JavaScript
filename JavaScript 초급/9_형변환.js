// 자동 형변환 : 자동으로 형 변환이 실행됨

// 명시적 형변환 : 의도를 가지고 원하는 타입으로 형을 변환 시키는 것
// String() : 문자형으로 변환
// Number() : 숫자형으로 변환
// Boolean() : 부울리언형으로 변환



// const mathScore = prompt("수학은 몇 점?");
// const engScore = prompt("영어는 몇 점?");
// const result = mathScore + engScore / 2;

// console.log(result);
// prompt로 입력된 mathScore과 engScore은 String형이 됨



console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)       // console.log는 쉼표로 구분하여 여러가지 값을 한 번에 출력할 수 있음
)



console.log(
    Number("1234"),
    Number("123jasd"),  // NaN
    Number(true),       // 1
    Number(false)       // 0
)

// Number(null) : 0
// Number(undefined) : NaN



console.log(        // true
    Boolean(1),
    Boolean(123),
    Boolean("javascript")
)

console.log(        // false
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
)

// Boolean(0) : false
// Boolean('0') : true

// Boolean('') : false
// Boolean(' ') : true