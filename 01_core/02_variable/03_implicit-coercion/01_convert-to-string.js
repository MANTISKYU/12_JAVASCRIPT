console.log('============');
// console.log(addEventListener);




console.log('=====문자열 타입으로 변환=====');
console.log(10 + '20');

console.log(`10 + 20 : ${10 + 20}`);

// 문자열 타입이 아닌 값을 문자열 타입으로 암묵적으로 변환하는 결과
console.log(1 + '');                // "1"
console.log(NaN + '');              // "NaN"
console.log(Infinity + '');         // "Infinity"
console.log(true + '');             // "true"
console.log(null + '');             // "null"
console.log(undefined + '');        // "undefined"
// console.log(Symbol() + '');      // Cannot convert a Symbol value to a string
console.log({} + '');               // 객체 - "[object Object]"
console.log([] + '');               // 배열 - ""
console.log(function(){} + '');     // 함수 - "function(){}"
