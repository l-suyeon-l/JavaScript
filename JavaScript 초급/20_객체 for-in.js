// 객체 for ... in

for (let key in superman) {
    console.log(key)
    console.log(superman[key])
}

const Mike = {
    name : "Mike",
    age : 30,
};

for (x in Mike) {           // 'x'는 key를 의미함
    // console.log(x)       // "name", "age"
    console.log(Mike[x])    // Mike['name'], Mike['age']  =>  "Mike", 30
}