(function() {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출');
    
}) ();

(function hello() {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출');
    
}) ();

// console.log(hello());

(function hello(name) {
    console.log('익명 즉시 실행 함수! 함수 정의와 동시에 호출');
    console.log(`${name}님 안녕하세요`);
    
    
}) ('홍길동');
