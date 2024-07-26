// 변화 상황

(function() {
    'use strict'
    function test() {
        console.log(this);
        
    }
    test();

    new test();
}())