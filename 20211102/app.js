// var
// let
// const //константы

let nameA = 'Артем';
// console.log('Hello, ' + nameA);

// nameA = 'София';

/*
Типы данных:
?Числа - Number 
1, 34, -100, 0.3, 4534534.66, new Number()
* Все, что не 0 - true

BigInt
1n, -100n, 47685934876948766n, new BigInt()
* Все, что не 0 - true

?Строки - String ('', "", ``)
'254452345', 'Hello', '', "--#^&%$fgdgs dfsdf gsdf g--", new String()
* Если длина == 0 - false, все остальное - true

?Логический - Boolean
true, false, new Boolean()

?Объект - Object
{ name : 'Andrii' }, new Object()
* По умолчанию - true

Символ - Symbol
new Symbol()
* true

Null
* false

Undefined
* false
*/

//Операторы
nameA = 'София';
//операнд(nameA) оператор(=) операнд('София') -- операция присваивания

let count = 0;
//    3       13    14  13   14
count = count + 100 * 9 - 12 / 3;
//                 900
//                          4
//            900
//                     896
// count <- 906
//операнд(count) оператор(=) (операнд(count) оператор(+) операнд(100))

//? Количество операндов
// унарные - один операнд

// бинарные - два операнда

// тернарные - три операнда
// a > 100 ? console.log('aaaa') : console.log('bbb')

//Условия
//Приведение типов
const types = [0.0, 0, 12, -2, 5.4, 'Hello, world', 'Dnipro', 'sld;kjf asdlkasl;kgj as', '', 1n, -345643n, 0n, true, false, { name : 'Sofiia' }, {}, Symbol('abracadabra'), Symbol(), null, undefined];

for(let i = 0; i < types.length; i += 1){
    if(types[i]){
        console.log('%c%s', 'background-color: #33aa22; padding: 3px; color: white;', 'true: ', types[i]);
    }else{
        console.log('%c%s', 'background-color: red; padding: 3px; color: white;', 'false: ', types[i]);
    }
}
