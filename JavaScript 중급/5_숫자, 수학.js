// 1. toString()
// 10진수 => 2진수/16진수
let num = 10;
num.toString();         // "10" (10진수)
num.toString(2);        // "1010" (2진수)

let num2 = 255;
num2.toString(16);      // "ff" (16진수)



// 2. Math
console.log(Math.PI);  // 3.141592

// Math.ceil() : 올림
let num1 = 5.1;
let num2 = 5.7;

Math.ceil(num1);    // 6
Math.ceil(num2);    // 6

// Math.floor() : 내림
Math.floor(num1);   // 5
Math.floor(num2);   // 5

// Math.round() : 반올림
Math.round(num1);   // 5
Math.round(num2);   // 6

// Math.random() : 0 ~ 1 사이 무작위 숫자 생성
Math.random();  // 0.135234987284232156
Math.random();  // 0.65485135723215651
Math.random();  // 0.89832865121481
Math.random();  // 0.321456998722156598

// cf) 1 ~ 100 사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random() * 100) + 1;

// Math.max() / Math.min() : 괄호 안의 인수들 중 최대값/최소값을 구할 수 있음
Math.max(1, 4, -1, 5, 10, 9, 5.54);     // 10
Math.min(1, 4, -1, 5, 10, 9, 5.54);     // -1

// Math.abs() : 절대값
Math.abs(-1);   // 1

// Math.pow(n, m) : 제곱
Math.pow(2, 10);    // 1024

// Math.sqrt() : 제곱근
Math.sqrt(16);  // 4



// 3. 소수점 자릿수
// 곱한 후 나누기
// cf) 소수점 둘째자리까지 표현(셋째 자리에서 반올림)
let userRate = 30.1234;
Math.round(userRate * 100) / 100;   // 30.12

// toFixed()
userRate.toFixed(2);    // "30.12"
userRate.toFixed(0);    // "30"
userRate.toFixed(6);    // "30.123400"  => 남는 소수점 자리는 0으로 채움
// toFixed() 함수는 문자열로 반환함. 반환받은 수를 num()을 통해 숫자로 변환해야함



// 4. isNaN() : 숫자인지 아닌지 판단
let x = Number('x');    // NaN

// 변수가 NaN인지 판단하는 것은 등호로는 불가능. isNaN()만이 판단할 수 있음
x == NaN    // false
x === NaN   // false
NaN == NaN  // false

isNaN(x);   // true
isNaN(3);   // false



// 5. parseInt() : 문자열을 숫자로 반환함
let margin = '10px';

parseInt(margin);   // 10
Number(margin);     // NaN
// Number은 문자가 혼용되어 있으면 NaN을 반환하지만, parseInt는 읽을 수 있는 부분까지 읽고 문자를 읽으면 그 앞까지의 숫자를 반환함

let redColor = 'f3';
parseInt(redColor);     // NaN
// 그래서 문자열이 숫자로 시작하지 않으면 NaN을 반환함

// parseInt()는 두번째 인수에 진수를 입력받아 지정할 수 있다.
parseInt(redColor, 16);     // 243 : 첫번째 인수(redColor)를 두번째 인수(16진수)로 인식하여 10진수로 출력한다.
parseInt('11', 2);          // 3 : '11'을 2진수로 인식하여 10진수로 출력



// 6. parseFloat() : 문자열을 부동소수점으로 반환함
let padding = '18.5%';
parseInt(padding);      // 18
parseFloat(padding);    // 18.5