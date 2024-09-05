// for문
for (let i = 0; i < 10; i++) {
    console.log(i+1);
}

// while문
i = 0;
while(i < 10) {
    console.log(i+1);
    i++;
}

// do-while : while문의 조건에 상관 없이 적어도 한 번은 무조건 실행함
i = 0;
do {
    console.log(i+1);
    i++
} while (i < 10);


// break : 멈추고 반복문을 빠져나옴
// continue : 멈추고 다음 반복으로 진행
while (true) {
    let answer = confirm('계속 할까요?');
    if (!answer) {
        break;
    }
}

for (i = 0; i < 10; i++) {
    if (i % 2) {
        continue;
    }
    console.log(i);
}