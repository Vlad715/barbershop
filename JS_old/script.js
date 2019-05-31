'use stict';

/*
var number = 5;
var string = "Hello!";
var sym = Sumbol();
var boolean = true;
null;
undefined;
var obj = {};
*/
/*
console.log(4/0);
console.log('string'/2);
let something;
console.log(something);

let persone = {
    name: "Jone",
    age: 24,
    isMarried: false
};

console.log(persone.age)

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1]);
*/
// alert('Hello World');

/* let answer = confirm('Are you here?');

console.log(answer); */
/*
let answer = +prompt('Are you eighteen?', 'yes');

console.log(typeof (answer) );

console.log('arr' + '-object');
console.log('4' + '-object');  */
/*
let incr = 20,
    decr = 20;


console.log(incr++);
console.log(decr--);

console.log(11%3);
console.log('2' === 2)

let isChecked = false,
    isClose = false;

console.log(isChecked || isClose);
*/
/*
if (2*4 == 69) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
*/
/*
let num = 69;

if (num < 59) {
    console.log("Неверно")
} else if (num > 101) {
    console.log("Много")
} else {
    console.log("Верно")
}
// сокращения кода
(num == 69) ? console.log('Верно') : console.log('Неверно');

switch (num) {
    case num < 59:
        console.log('Неверно');
        break;
    case num > 100:
        console.log('Много');
        break;
    case 68:
        console.log('Верно');
        break;
    default:
        console.log('Что то пошло не так');
        break;
}

let num = 68;
while (num > 63) {
     console.log(num);
     num--;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i)
}
*/
/*
let num = 20;
function showFirstMessege(text) {
    alert(text);
    let num = 15;
    console.log(num);
}

showFirstMessege('Hello World');
console.log(num);
*/

// function calc(a,b) {
//     return (a + b);
// }

// console.log(calc(3,4));
// console.log(calc(9,6));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test-First";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// function first() {
//     // im bussy
//     setTimeout( function () {
//         console.log(1);
//         }, 500 );
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }

// function done() {
//     console.log('Я прошел 3й урок!');
// }

// learnJS('JavaScript', done);


// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test'
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: 'blak',
//     bg: 'red'
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значения ' + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('1');

// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// arr[99] = 99;

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(arr);


// let arr = ['first', 2, 3, 'four', 'five'];

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + '(масив: ' + mass + ')');
// });

// console.log(arr);


// let mass = [1,2,4,5,6];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['sss', 'zzz', 'fff'],
//     i = arr.join(',');

// console.log(i);


// let arr = ['sss', 'zzz', 'fff'],
//     i = arr.sort();

// console.log(arr);

// let arr = ['2', '21', '7'],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(arr);


let soldier = {
    health: 400,
    armor: 80,
    uron: 55
}

let John = {
    health: 100
};

John.__prto__ = soldier;

console.log(John);
console.log(John.uron);