//Литеральное объявление
let stud1 = 'Artem';
const stud2 = "Kseniia";
const stud3 = `Oleksii`; //~ё - кавычка

const fish = 'Let\'s see some Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias dolorem soluta provident blanditiis nulla. Ut aliquid, tenetur dolores iusto quis cum deleniti impedit, repellendus ad facere eligendi ex iste!';

const fish2 = "Let's see some Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestias dolorem soluta provident blanditiis nulla. Ut aliquid, tenetur dolores iusto quis cum deleniti impedit, repellendus ad facere eligendi ex iste!";

const fish12 = `Fish1:
${ fish }
-------------------------
Fish ${ 1 + 1 }:
${ fish2 }`;

console.log(fish12);

//СТРОКИ НЕ МУТАБЕЛЬНЫ
stud1[0] = 'U';
console.log(stud1 + 'U');
console.log(stud1);

console.log(stud1.includes('ti'));
console.log(stud2.repeat(33));

console.log(stud3.replace(/[oieu]/gi, 'a'));

console.log(fish.split(' '));

document.body.insertAdjacentHTML('beforeend',(stud3 + stud3.sub() + stud3.sup()));

console.log(stud1.substr(1, 3));
console.log(stud1.substr(-3));
console.log(stud1.substr(1));

console.log('-------------');
console.log(stud3.slice(3, -1));

const spaces = '  hello    ';
console.log('!' + spaces + '!');
console.log('!' + spaces.trim() + '!');

console.log('--------------------------------------');
console.clear();
console.log('Приведение типов');
//?Неявное приведение
//!К числу
//   +'22'
//   1 * '22'
//   '22' / 1
//  toFixed
//  parseInt
//  parseFloat
//  Number

//!К строке
//  22 + ''
// toString

//!К логическому типу
// !! двойное отрицание
console.log(typeof (!!3) );
console.log(!!3);