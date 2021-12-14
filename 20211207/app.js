//Functions

// function declaration

// hello('Nick');

function hello(name){
    console.log('Hello', name);
}

// function expression

const msg = function(txt){
    console.log(Date.now(), txt);
}

msg('Hello');

// безымянная функция
// function(){

// }

// () => {

// }

const sum = function(a, b){
    return a + b;
}

console.log(sum(1,233));