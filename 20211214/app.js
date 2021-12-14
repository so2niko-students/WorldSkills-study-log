const day = 12;

const showData = (data) => {
    //Блочные области видимости
    if(true){
        const name = 'Nick';
        console.log('in block if', name);
    }
    console.log(day, data, name);
}

showData('Hello');

const genRandNum = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

const getRandomNumArr = (len = -1) => {
    if(len == -1){
        len = genRandNum(10, 100);
    }
    const randArr = [];
    for(let i = 0; i < len; i += 1){
        randArr[i] = genRandNum(0, 100);
    }

    return randArr;
}

const generateYearProfit = () => {
    const year = [];
    for(let i = 0; i < 12; i += 1){
        year[i] = {
            name : i,
            profit : getRandomNumArr(30)
        };
    }
    return year;
}

const company = {
    name : 'Nick Sotula & co. (5 people)',
    profit : generateYearProfit()
};

const sortNums = (a, b) => {
    return a - b;
}

const sort2DArrs = (prev, next) => {
    const sumArr = (acc, el) => acc + el;
    prev.sum = prev.profit.reduce(sumArr);
    next.sum = next.profit.reduce(sumArr);
    return prev.sum - next.sum;
}

company.profitSorted = company.profit.slice().sort(sort2DArrs);

console.log(company);

const covidStart = new Date(2020, 2, 17);
const now = new Date();
console.log(covidStart, now);
const period = now - covidStart;
const seconds = period / 1000;
const minutes = seconds / 60;
console.log('Minutes: ', minutes);
const hours = minutes / 60;
console.log('hours: ', hours);
const days = hours / 24;
console.log('days: ', days);

const timeOutID = setTimeout(() => {
    console.log('I am an Interval!!!!');
}, 3000);

console.log('timeOutID', timeOutID);

let intervalCount = 4;

const intervalID = setInterval(() => {
    if(intervalCount == 1){
        clearInterval(intervalID);
    }
    console.log('Interval', genRandNum(1,10));
    intervalCount -= 1;
}, 3000);


console.log('intervalID', intervalID);

const clock = {
    dom : {
        h : document.querySelector('.hours'),
        m : document.querySelector('.minutes'),
        s : document.querySelector('.seconds'),
    },
    tick : () => {
        const d = new Date();
        clock.dom.h.innerText = d.getHours();
        clock.dom.m.innerText = d.getMinutes();
        clock.dom.s.innerText = d.getSeconds();
    }
}

setInterval(clock.tick, 100);