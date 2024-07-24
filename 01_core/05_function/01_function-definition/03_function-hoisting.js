
console.log(hello);
console.log(hi);

console.log(hello("홍길동"));
console.log(hi("홍길동"));





function hello(name) {
    return `${name}님 안녕하세요!`;
}

var hi = function (name) {
    return `${name} Hi`;
}