// DOM(Document Object Model) : 문서 객체 모델
// html 문서의 각 요소들을 트리 형식으로 표현해줌. 개발자는 js를 이용해서 이를 생성/수정/삭제할 수 있다. (그림 참조)
// 트리 형식의 자료구조. 하나의 객체를 노드라고 함.


// 개발자 모드 -> 콘솔창

document.documentElement;   // html 코드에 접근할 수 있음
document.body;              // body 태그에 접근할 수 있음
document.head;              // head 태그에 접근할 수 있음
// 모든 html의 태그는 객체. 이 객체는 이렇게 자바스크립트에서 접근/제어할 수 있음.


document.body.style;                        // body태그의 style에 접근할 수 있음
document.body.style.opacity = '0';          // body 태그의 opacity를 0으로 설정
document.body.style.padding = '100px';      // padding을 100px로 설정
// document는 이런 식으로 제어할 수 있음





// getElementBy...

// id로 접근 : getElementById
const el = document.getElementById('first');        // 인수에 아이디 명 대입
el;         // first 아이디에 접근 가능
// id는 한 페이지에 하나만 선언 가능. 그래서 Element 단수형

const pList = document.getElementsByTagName('p');   // 인수에 태그 종류 대입
pList;      // p 태그에 접근 가능
// tag명은 Elements 복수형

// pList는 for...of로 접근 가능
for (p of pList) {
    p.style.fontSize = '30px';
}

for (p of pList) {
    p.style.opacity = String(Math.random());
}

document.getElementsByClassName('link');
document.getElementsByName()                    // 얘네도 가능



// querySelector...
// css 선택자에 대해 잘 알고있어야 함

// css 문법에서 클래스는 .으로 접근할 수 있음
document.querySelectorAll('.link');     // 태그명.클래스

// css 문법에서 아이디는 #으로 접근할 수 있음
document.querySelectorAll('#first');
document.querySelector('#first');       // 아이디는 어차피 하나이므로 얘 사용하면 됨





// h3 태그를 이용한 제목들 중 특정 태그를 수정
document.querySelector('h3:nth-of-type(2)');    // 두 번째 h3 태그
document.querySelector('h3:nth-of-type(2)').style.color = 'red';


const pList = document.querySelectorAll('p:nth-of-type(2n)');   // 짝수번째 p 태그
for (p of pList) {
    p.style.backgroundColor = '#000';
    p.style.color = '#fff';
}

// 지금까지 사용한 메소드로 가져온 결과들은 배열처럼 보이지만 배열이 아님.
// NodeList : 배열이 아닌, 이터러블한 컬렉션

pList[1];           // pList의 두번째 요소 확인 가능
pList.length;       // pList의 개수 알기 가능
// 하지만 배열이 아니기 때문에 push, pop, filter, join같은 배열의 메소드는 사용할 수 없음






// 앞에 배운 두 메소드의 반환값은?
const pList1 = document.querySelectorAll('p');         // NodeList 반환
const pList2 = document.getElementsByTagName('p');     // HTMLCollection 반환

pList1;     // NodeList(4)
pList2;     // HTMLCollection(4) : 괄호 안의 숫자는 배열의 길이

// p 태그 임의 추가

pList1;     // NodeList(4)       : 한 번 저장된 값을 계속 사용
pList2;     // HTMLCollection(5) : p태그 변경 이전에 선언했지만 태그의 변경을 실시간으로 반영