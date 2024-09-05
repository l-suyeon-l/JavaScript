const blue = document.getElementById('blue');
blue.firstChild;            // text "Blue"
blue.firstElementChild;     // null

const blueTextNode = blue.firstChild;
blueTextNode.nodeName;      // '#text'
blueTextNode.nodeType;      // 3 (텍스트 노드를 의미)
blueTextNode.nodeValue;     // 'Blue'
blueTextNode.nodeValue = '파랑';    // 'Blue' -> '파랑'으로 텍스트가 변경됨



const ul = document.getElementById('color');
ul.nodeType;            // 1 : 요소 노드를 의미
ul.nodeName;            // 'UL' : 요소 노드의 태그명을 대문자로 반환
ul.nodeValue;           // null : nodeValue는 텍스트가 아닌 경우 null값 반환
// 텍스트가 아닌 경우에도 텍스트를 변경할 수 있다
ul.textContent;                     // '\n      Red\n       \n      Blue\n      Green\n'
ul.textContent = 'xxxx'             // id가 color인 ul태그의 텍스트를 'xxxx'로 변경
ul.textContent = '<li>RED</li>'     // 마크업을 제대로 설정해도 넣은 문자열이 그대로 변경됨
ul.innerHTML = '<li>RED</li>'       // innerHTML을 사용하면 마크업을 설정할 수 있음. but, 요소를 추가/제거/수정할 때마다 모든 html을 string으로 작성해야함
ul.innerHTML = '<li>RED</li><li>BLUE</li>...'   // 이렇게







const ul = document.getElementById('color');


const newLi = document.createElement('li');     // li 엘리먼트 생성
newLi;                                          // <li></li>

newLi.innerHTML = 'green';                      // li 엘리먼트에 'green' 텍스트 추가
newLi;                                          // <li>green</li>
ul.appendChild(newLi);                          // ul(id가 color인 요소)에 newLi 요소 추가


const newLi2 = document.createElement('li');    // li 엘리먼트 생성 : <li></li>
const newText = document.createTextNode('pink');
newText;                        // "pink"

newLi2.appendChild(newText);    // <li>pink</li>
ul.appendChild(newLi2);         // ul(id가 color인 요소)에 newLi2 요소 추가
// appendChild는 지정한 부모노드에 가장 마지막 자식으로 추가됨

// 다른 위치에 추가하는 방법?
const newLi3 = document.createElement('li');
const newText2 = document.createTextNode('black');      // "black"
newLi3.appendChild(newText2);                           // <li>black</li>
const red = document.getElementById('red');
ul.insertBefore(newLi3, red);                           // 두번째 인자 앞에 첫번째 인자를 넣어라.

// 새롭게 노드를 생성하지 않고 기존 노드를 append하면, 추가가 아닌 이동이 된다.




// 노드 복제 : cloneNode
const newBlack = newLi3.cloneNode();        // <li>black</li>을 복제해서 newBlack을 만듦
ul.appendChild(newBlack);                   // 새로운 노드를 생성해서 append했으므로 추가가 됨. 근데!!! text가 아닌 li 태그만 복제됨 : <li></li>

const newBlack2 = newLi3.cloneNode(true);   // 깊은 복제 : 자식 노드(텍스트 노드)까지 복제됨
ul.appendChild(newBlack2);                  // <li>black</li> 까지 잘 복제됨




// 노드 삭제 : removeChild
ul.removeChild(red);                    // id가 'red'인 태그 삭제
ul.removeChild(newBlack2);              // 마지막에 추가한 복제한 black 노드 삭제
ul.removeChild(ul.firstElementChild);   // 첫번째 자식 요소 노드 삭제
ul.removeChild(ul.lastElementChild);    // 마지막 자식 요소 노드 삭제



