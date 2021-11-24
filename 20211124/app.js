//Массивы

const arr = [];
const arr2 = new Array();

arr[3] = 'Dnipro';
arr[22] = true;
arr[100] = [1, 2, 3];
arr[1] = undefined;
delete arr[3];//Зачищает место и оставляет его пустым


//4 метода оперирования хвостом и головой массива

//push - заносим в конец(хвост) массива
arr.push(33, 34, 35, 'Hello');

//pop - забирает с конца(хвоста) массива 1 элемент
let h = arr.pop();

//unshift - заносит в начало(голову) массива
arr.unshift(22, 23, 24, null);

//shift - забирает с начала(головы) массива
h = arr.shift();


// console.log(arr);
// console.log(h)

const stars = ['Альфа Центавра', 'Звезда Барнарда', 'Луман 16', 'Сириус', 'Эпсилон Эридана', 'Лакайль', 'Изи Водолей', 'Процион', 'Лебедя', 'Эпсилон Индейца'];

const stars3 = stars.slice(3);

// for(let i = 0; i < 3; i += 1){
//     stars3[i] = stars[i];
// }

// console.log(stars3);
// delete stars[2];
//Удалять элементы из массива, вставлять новые элементы, заменять элементы на другие
stars.splice(-3, 0, 'Изи Рак', 'Изи Козерог');

console.log(stars);

//Методы перебора массивов
//!Проход по массиву
//! forEach

// for(let i = 0; i < stars.length; i += 1){
//     console.log(i, stars[i]);
// }

// stars.forEach(function(el, i, arr){ console.log(i, el) });
// stars.forEach((el, i) => console.log(i, el));

//! Создать новый массив на базе существующего
//! map

// const starsNames = stars.map((el, i) => { return `Звезда ${ i + 1 }: ${ el }`});

// for(let i = 0; i < stars.length; i+= 1){
//     starsNames[i] = `Звезда ${ i + 1 }: ${ stars[i] }`;
// }

// console.log(starsNames);

//! Отфильтровать массив 
//! filter

// const stars2Words = stars.filter(el => el.includes(' '));

// for(let i = 0; i < stars.length; i += 1){
//     if(stars[i].split(' ').length > 1){
//         stars2Words.push(stars[i]);
//     }
// }

// console.log(stars2Words);

//! Проверяет массив на условие

//! ищет первое ДА(true). Хотя-бы один элемент должен соответствовать условию
//! some
// let isProcion = stars.some(el => el === 'Процион');
// for(let i = 0; i < stars.length; i += 1){
//     if(stars[i] === 'Процион'){
//         isProcion = true;
//         break;
//     }
// }

// console.log(isProcion);


//! ищет первое НЕТ(false). Каждый элемент должен соответствовать условию
//! every
// let isProcion = stars.every(el => el === 'Процион');

// for(let i = 0; i < stars.length; i += 1){
//     if(stars[i] != 'Процион'){
//         isProcion = false;
//         break;
//     }
// }

// console.log(isProcion);

//! Поиск элемента
//! find

// let star7Letters = stars.find(el => el.length == 7);

// for(let i = 0; i < stars.length; i += 1){
//     if(stars[i].length == 6){
//         star7Letters = stars[i];
//         break;
//     }
// }

// console.log(star7Letters);

//! Метода анализа массива
//! reduce

// let sumL = stars.reduce((acc, el) => acc + el.length, 0);

// // for(let i = 0; i < stars.length; i += 1){
// //     sumL += stars[i].length;
// // }

// console.log(sumL);

let starsStat = stars.reduce((acc, el) => {
    const count = el.split(' ').length;
    acc[el.split(' ').length] += 1;
    return acc;
}, {
    1 : 0,
    2 : 0
});

// let starsStat = {
//     1 : 0,
//     2 : 0
// };

// for(let i = 0; i < stars.length; i += 1){
//     const count = stars[i].split(' ').length;
//     starsStat[count] += 1;
// }

console.log(starsStat);

console.log([11, 234, 4545, 34534, 6768, 754, 234].reduce((acc, el) => acc + el));