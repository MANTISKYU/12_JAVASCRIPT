
let student = {
    name: 'bear',
    age : 20,
}

let student2 = {
    name: 'bear',
    age : 20,
}

// constructor 
// 대문자로 쓰면 생성자
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// 생성자 사용법
let cStudent1 = new Student('득규', 20);
let cStudent2 = new Student('유안', 21);

console.log(cStudent1);
console.log(cStudent2);

console.log(Student.prototype);

Student.prototype.gender = '남';

let cStudent3 = new Student('성민', 20);

console.log(cStudent3);

console.log(cStudent3.gender);


