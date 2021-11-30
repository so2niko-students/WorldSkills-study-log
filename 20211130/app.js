//Default properties

function sum1(a, b){
    a = a || 0;
    b = b || 0;
    return a + b;
}

function sum2(a = 0, b = 0){
    return a + b;
}

console.log(sum2(1, 1));
console.log(sum2());
console.log(sum2(null, false));