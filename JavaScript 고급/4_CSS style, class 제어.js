// 콘솔창 들어가기

// className 프로퍼티
box.className;                  // ''
box.className = 'bg-red';       // 배경화면 빨간색

box.className = 'bg-blue';      // 배경화면 파란색
box.className = 'txt-pink';     // 텍스트 핑크색
// =>
box.className = 'bg-blue txt-pink';
// className 메소드는 한 요소를 추가/제거/수정할 때마다 처음부터 다시 작성해줘야함. 따라서 잘 사용하지 않음



// classList 프로퍼티
box.classList;      // 클래스를 보여줌 :

// add, remove
box.classList.add('txt-white');                 // id가 box인 요소의 클래스에 txt-white 추가
box.classList.remove('txt-white');              // id가 box인 요소의 클래스에 txt-white 삭제
box.classList.add('bg-green', 'txt-yellow');    // box 클래스에 두 가지 요소 동시 추가
box.classList.replace('bg-red', 'bg-blue');     // box 클래스의 bg-red를 bg-blue로 변경


// 특정 클래스를 넣었다 뺐다하기.
setInterval(()=>{
    box.classList.toggle('bg-red');     // 토글 사용 : 해당 클래스가 있으면 제거, 없으면 넣어주기
}, 1000)                                // setInterval을 이용해서 1초에 한번씩 코드 실행