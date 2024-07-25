const user = {
    activate : true,
    login : function() {
        console.log('로그인이 되었습니다');
        
    }
}

const student = {
    passion : true
}

student.__proto__ = user;

console.log(student.activate);

student.login();
console.log(student.passion);

