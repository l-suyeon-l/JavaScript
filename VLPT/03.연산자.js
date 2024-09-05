/* 산술 연산자 */
// + : 덧셈
// - : 뺄셈
// * : 곱셈
// / : 나눗셈

let a = 1 + 2;
console.log(a);


a = 1 + 2 - (3 * 4) / 4;
console.log(a);


a = 1;
a++;
++a;
console.log(a);


a = 1;
console.log(a++);
console.log(++a);





/* 대입 연산자 */
a = 1;
a = a + 3;  // a += 3;
a = a - 3;  // a -= 3;
a = a * 3;  // a *= 3;
a = a / 3;  // a /= 3;





/* 논리 연산자 */
// 1. NOT
const b = !true;
console.log(b);     // false

const c = !false;
console.log(c);     // true


// 2. AND
const d = true && true;
console.log(d);     // true

let e = false && false;
console.log(e);     // false

e = false && true;
console.log(e);     // false

e = true && false;
console.log(e);     // false


// 3. OR
let f = true || false;
console.log(f);     // true

f = false || true;
console.log(f);     // true

f = true || true;
console.log(f);     // true

let g = false || false;
console.log(g);     // false


// 논리 연산자의 순서
// NOT -> AND -> OR

// const value = !((ture && false) || (true && false) || !false);
// !((true && false) || (true && false) || true);
// !(false || false }} true);
// !true;
// false;





/* 비교 연산자 */
// 1. ==
const h = 1;
const i = 1;
const equals = h === i;
console.log(equals);    // true

// == 와 === 의 차이점
// == : 숫자 1과 문자 '1'이 동일한 값으로 간주됨, 0과 false도 같은 값으로 간주됨, undefined와 null도 같은 값으로 간주됨
// === : 자료형까지 비교


// 2. !=
const value2 = 'a' !== 'b';     // true
