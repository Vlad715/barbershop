// console.log('Hello world');

// Примитивние
// String 'hello', 'hello'
// Number 2019, 9.5
// Boolean true, false
// Null - null
// Underfined - Underfined
// Sumbol 

// Сложные
// Object {name: 'Jonh'};
// Array [ 1, 2, 3 ];
// Function 
// Date 

// Переменные var, let, const 

// var userName = "Denis";
// userName = 'Den';

// console.log(userName);

// let a = 1,
//     b = 5,
//     c = 'hello';

// const PI = 3.14;

// const OBJ = { name: 'Vasia'};
// OBJ.age = 28;

// console.log(OBJ);


// Строки
// let str = 'Hello world';
// let userName = 'jonh';
// let userAge = 25;
// let value;

// value = str.length;
// value = str[8];
// value = str[ str.length - 1 ];
// value = str.toUpperCase();
// value = str.indexOf('world');
// value = str.slice(2, -2);
// value = str.substr(1, 2);
// value = 'Hello' + ' ' + 'world';
// value = 'My name is ' + userName;
// value = `my name is ${userName}`;
// value = userName[0].toUpperCase() + userName.slice(1);

// console.log(value);

// Для привращения в строку чисел у нас есть
// String, toString, + " ";

// Number

// let number = 20;
// let num;

// num = 1 - 'gsas';
// num = parseFloat('25px');
// num = Math.round(7.3);
// num = Math.random()*20;

// console.log(num);

// Boolean
// let = bool = true;

// bool = !true;
// bool = !'gewv';
// bool = Boolean(undefined);
// bool = Boolean('cool');
// bool = Boolean('');
// bool = Boolean(-2);

// console.log(bool);

//  Object
// let user = {
//     name: 'denis',
//     age: 28,
//     work: 'EasyCode',
//     more: {
//         value: 100,
//         city: 'Kharkiy'
//     }
// };

// let obj;
// let prop = 'name';

// obj = user.name;
// obj = user['age'];
// obj = user[prop];

// user.name = 'Den';
// user.info = 'developer';

// obj = user.more.value;
// obj = user['more']['value'];
// obj = user['more'].city;

// user.wallet = {};
// user.wallet.balance = 20;

// // console.log(obj);
// // console.log(user);


// Array 
// let arr = [1, 2, 3];

// el = arr[0];

// arr[1] = 'two';
// el = arr.length;

// console.log(el);



//  || - правда && -  ложь

// let user = {
//     name: 'Vlados',
//     age: 24
// };

// let userName = user.name || 'Default user';

// user.fullInfo = Boolean(user.name) && Boolean(user.age);

// console.log(user);

// //  if else
// let a = 4;

// if (a >= 5) {
//     console.log('cool');
//     } else {
//         console.log('puck');
//     };

// let name = 'Ksusha';

// if (name) {console.log(`Hello ${name}`);
//  } else {
//      console.log('Hello Vasia');
// }

// let arr = [];

// if (arr.length) {
//     console.log(arr);
// } else {console.log('array empty');
// }

// let num;
// let str = 'Hello';

// num = +'20';
// num = 10;
// num = num +50;
// num +=30;
// str += ' Ksusha';
// num++;
// --num;
// num = 5 % 2;

// console.log(num);
// console.log(!5);

// let value = 5;

// switch(value){
//     case 1: console.log(1); break;
//     case 5: console.log(51); break;
//     case 7: console.log(7);
//     default: console.log('presents')
// }


// Цикли
// while, do while, for, for in, for of,
// ітератор і
// условие і < 10
// i++

// let str1 = 'Hello';
// let i = str1.length;

// while (i--) {
//     console.log(str1[i], i);
// }

// let isFinish;
// let i = 10;

// while (!isFinish){
//     console.log(i, isFinish);
//     isFinish = !i--;
//     console.log(isFinish);
// }

// let index;

// do {
//     console.log(`Index = ${index}`);
// }  while (index);


// for (init; condition; i++)
// break, continue

// let colors = ['black', 'white', 'yellow'];

// for (let i = 0; i < colors.length; i++ ){
//     if ( colors[i] === 'white' ){
//         continue;
//     }
//     console.log(colors[i]);
// }



// // let obj = {
// //     name: 'Denis',
// //     age: 28
// // }

// // for ( let key in obj ){
// //     console.log(key, obj[key]);
// // // }

// for ( let value of colors ) {
//     console.log(value);
// }


//          << Урок 3  >>


// function declaration

// function sum(x = 0, y = 0, ...easyArgs) {
    
//     // if ( x === undefined ) return new Error('не передан параметр x');

//     console.log(easyArgs);
//     return x + y;
// }

// let res = sum(...[1, 78, 5]);

// console.log(res);


// let arr = ['first', 'second', 5, 89, 69, 125];

// // let one = arr[0];
// // let two = arr[1];

// let [ one, two, ...last ] = arr;

// console.log(one, two, last);

// let user = {
//     name: 'Denis',
//     age: 24
// };

// // let name = user.name;
// // let age = user.age;

// let { name, age } = user;

// console.log(name, age);


// function expression 
// let num = function () {
//     console.log('Arrow');
// };

// num();

// (function () {
//     console.log('Self invoked funtion');
// }) ();

// let arrow = () => {
//     console.log('Arrow function');
// };

// arrow();

// let sumArrow = (x, y) => x + y;
// let sumArrow2 = x => x + 7;

// console.log( sumArrow2(1, 3));

// Users
// let users = [
//     {
//         id: 1,
//         name: 'Vlad' ,
//         age: 24
//     },
//     {
//         id: 2,
//         name: 'Kate' ,
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Ivan' ,
//         age: 28
//     }
// ];

// // add user
// // delete user

// function addUser(name, age) {
//     if ( !name ) return new Error('Не передано поле name');
//     if ( !age ) return new Error('Не передано поле age');

//     // push
//     users.push({ name, age, id: Math.round(Math.random()*10) });
//     return users;
// }

// function deleteUser(id) {

//     if (!users.length) return console.info('Пользователей больше нет');

//     for ( let i = 0; i < users.length; i++ ) {
//         if ( users[i].id === id ) {
//             users.splice(i, 1);
//             break;
//         }
//     }
//     return users;
// }

// let x = 'Global var';

// function env(x) {
//     // let x = 'Local var';
//     console.log(x);
// }

// env();
// console.log(x);


// Функции высшего порядка

// function highFunction( func ) {
//     console.log(func);
//     func();
// }
// highFunction(function  (){
//     console.log('I am a handler! hello bro!');
// });

// highFunction(function  (){
//     console.log('I am a handler 2! hello sis!');
// });

// let str = 'Hello';
// let newStr = ' ';

// for ( let i = 0; i < str.length; i++ ) {
//     newStr += str[i] + '$';
// }

// console.log(newStr);



// function rewriteString(string, handler) {
    
//     let newString = '';

//     for ( let i = 0; i < string.length; i++ ) {
//         newString += handler(string[i]);
//         // Передаем в handler каждый эл строки и записываем
//         // результат его работы в newString
//     }

//     console.log(newString);
//     return newString;
// }

// rewriteString('Easycode', function (symbol) {
//     return symbol + '$';
// });

// rewriteString('Hello world', function (symbol) {
//     return symbol + '_';
// });



//  some every

// let someArr = [1, 2, 'some string'];

// let methodRes = someArr.some(function (value) {  // value - один из елементов масива
//     return typeof value === 'string';
// })

// let evryRes = someArr.every(function (value) {  // value - один из елементов масива
//     return typeof value === 'string';
// })

// console.log(methodRes, evryRes);



// function some(arr, handler) {
//     for ( let i = 0; i < arr.length; i++ ) {
//         if ( handler(arr[i]) ) return true;
//     }

//     return false;
// }

// let customSome = some([1, 2, 3], function(el) {
//     return typeof el === 'string';
// });

// let customSome = some([1, 2, 3], el => typeof el === 'string');

// console.log(customSome);


// Методы масивов


// let colors = ['yellow', 'blue', 'white'];

// colors.pop();
// colors.push('pink');

// // console.log(colors);

// colors.unshift('red');
// colors.shift();

// // console.log(colors);

// //  join, split

// [1,2,3].join();   // "1,2,3"
// [1,2,3].join('-');  // "1-2-3"
// [1,2,3].join('');  // "123"

// 'hello world'.split(' ')  // ["hello", "world"]

// let numbers = [10, 6, 7];

// let joinedArray = numbers.concat(colors);

// joinedArray = numbers.concat(91, 59)

// // console.log(joinedArray);

// let copied = [].concat(colors);

// // console.log(copied);

// colors.splice(1, 0, 21, 22, 25);

// console.log(colors);

// colors.reverse();

// console.log(colors);

// 'Hello world'.split('')  // ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
// 'Hello world'.split('').reverse()   //  ["d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "H"]
// 'Hello world'.split('').reverse().join('')  //  "dlrow olleH"

// ['d', 'f', 'a', 'c'].sort()  //  ["a", "c", "d", "f"]

// let num = [10, 2, 15, 7, 1, 3, 28];

// console.log(num);

// num1.sort(function (prev, next) {
//     console.log(prev, next);
//     console.log(num1);
//     return prev - next;
// });

// num.sort( (prev, next) => prev - next);

// console.log(num);

// let users = [
//     {
//         id: 1,
//         name: 'Vlad' ,
//         age: 24
//     },
//     {
//         id: 2,
//         name: 'Kate' ,
//         age: 18
//     },
//     {
//         id: 3,
//         name: 'Ann' ,
//         age: 22
//     }
// ];

// users.sort((prev, next) => prev.age - next.age);

// users.sort((prev, next) => {
//     if ( prev.name < next.name ) return -1;
//     if ( prev.name > next.name ) return 1;
// });

// console.log(users);


//            DOM

let divs = document.getElementsByTagName('div');
let divsByClass = document.getElementsByClassName('box');
let divById = document.getElementById('element');

let divsQuery = document.querySelectorAll('body div');
let divQuery = document.querySelector('div');

let link = document.querySelector('ul a');

console.dir(divQuery);

let parent = link.closest('li');

console.log(parent);


