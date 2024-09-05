// 객체 in
function isAdult(user) {
    if (!('age' in user) || user.age < 20) {        // 객체 user 안에 'age'라는 key가 없거나 age 값이 20보다 작으면
        return false;
    } else {
        return true;
    }
}

// age 프로퍼티가 있는 유저 객체
const Mike = {
    name : "Mike",
    age : 30.
};

// age 프로퍼티가 없는 유저 객체
const Jane = {
    name : "Jane",
};

console.log(isAdult(Jane));         // Jane 객체에 age key가 없음 => true가 나오지 않게 하기 위해 isAdult 함수에 !('age' in user) 조건 추가