var string;
string = 'javascript';
string = "javascript";
string = `javascript`;

string = '작은 따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열로 인식";

var str = '안녕하세요. \n 반갑습니다';
console.log(str);

var multiline = `안녕하세요.
반갑습니다`;
console.log(multiline);

var lastName = '이';
var firstName = '득규';
console.log('제 이름은' + lastName + firstName);

console.log(`제 이름은 ${lastName}${firstName}`);



