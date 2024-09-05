// 부모 노드 찾기
const red = document.getElementById('red');
red.parentNode;         // 부모 노드 중 모든 노드 반환
red.parentElement;      // 부모 노드 중 요소 노드만 반환


document.documentElement;                   // html 코드 불러옴. 그렇다면 이 html의 부모 노드는?
document.documentElement.parentNode;        // #document : html의 부모노드는 document
document.documentElement.parentElement;     // NULL      : 부모노드 중 요소노드(html의 태그)만 반환. document는 요소 노드가 아니기 때문에 반환값 없음



// 자식 노드 찾기
const ul = document.getElementById('color');
ul.childNodes;          // 자식 노드 중 모든 노드 반환(li 요소 외에도 text, comment 등 모든 노드 반환)
ul.children;            // 자식 노드 중 요소 노드만 반환
// text, comment는 줄바꿈 공백도 포함함. 따라서 childNodes;의 개수가 더 많을 수밖에 없다





// NodeList 반환 : 모든 타입의 노드들(실시간 반영x)
document.documentElement.parentNode;
ul.childNodes;  // 예외로 실시간 반영함

// HTMLCollection 반환 : 요소 타입의 노드들(실시간 반영o)
document.documentElement.parentElement;
ul.children;





ul.firstChild;  // 첫번째 노드
ul.lastChild;   // 마지막 노드

ul.firstElementChild;   // 첫번째 요소 노드
ul.lastElementChild;    // 마지막 요소 노드








// 형제 노드 찾기
const blue = document.getElementById('blue');
blue.previousSibling;           // 형제 노드 이전의 노드
blue.nextSibling;               // 형제 노드 이후의 노드
blue.previousElementSibling;    // 형제 노드 이전의 요소 노드
blue.nextElementSibling;        // 형제 노드 이후의 요소 노드