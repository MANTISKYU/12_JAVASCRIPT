function increase(value) {
    return value + 1;
}

function decrease(value) {
    return value - 1;
}

function apply (func, value) {
    return func(value);
}

console.log(apply(increase, 5));

console.log(decrease, 5);
console.log(
    apply(function(value){return value**2}, 5)
);


