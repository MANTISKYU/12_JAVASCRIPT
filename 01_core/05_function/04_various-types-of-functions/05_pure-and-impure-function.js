var cnt = 0;

function increase(n) {
    return ++n;
}

cnt = increase(cnt);
console.log(cnt);


function decrease() {
    return --cnt;
}

cnt = decrease();
console.log(cnt);
