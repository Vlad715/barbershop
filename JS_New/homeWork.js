
// let a = 1;

// const b = 17;

// const userName = Vlados;

// let userInfo = 12;

// console.log(test);
// var test = 'string';

// var x = 'string';
// var x = 'string № 2';
// console.log(x);

// let someVariable = 15;
// let someVariable = 10;

// console.log(test);
// let test = 'string';

// let stringOne ='There is A string one';
// let value;
// let stringTwo = 'There is string two';

// value = stringOne.length;
// value = stringOne[1];
// value = stringOne.toLowerCase();
// value = stringOne.toUpperCase();
// value = stringOne.indexOf('A');
// // value = stringOne.substr(5);
// value = stringOne.slice(2, 8);

// let string = 'some test string';
// let thing

// thing = string.slice(-1);

// let thing2;
// thing2 = thing.toUpperCase();

// thing = string.indexOf('string');

// thing = string.substr(5, 4);
// thing = string.slice(5, 9);
// thing = string.slice(0, -6);

// let a = 20;
// let b = 16;

// thing = a + '' + b;

// console.log(thing);

// Number

// let number = Math.PI
// let round = number.toFixed(2);

// console.log(number);
// console.log(round);


// maxNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

// console.log(maxNumber);

// let num;

// num = Math.random()*10;
// numRound = num.toFixed(2);

// console.log(num);
// console.log(numRound);

// let a = 0.6,
//     b = 0.7,
//     c,
//     d;

// c = a + b;
// d = c.toFixed(2);

// console.log(d);

// let price = '100$';

// // a = parseFloat(string);

// // console.log(a);

// let obj = {product: 'iphone'};

// obj.price = 1000;
// obj.corrency = 'dollar';
// obj.details = {model: 7,
//                color: 'Black'};

// console.log(obj);


//          << Урок 2  >>


// let a;

// if (a = 'hidden') {
//     console.log('visible');
// } else {
//     console.log('hidden');
// }

// let b = 'hidden';

// b == 'hidden'? console.log('visible') : console.log('hidden');

// let c = -10;

// // if (c == 0) {
// //     console.log(1)
// // } else if (c < 0 ) {
// //     console.log('less then zero')
// // } else if (c > 0) {
// //     console.log(c *= 10);
// // };

// c === 0 ? console.log(1) :
//   c < 0 ? console.log('less then zero') : console.log(c *= 10);

// let a = 'block';

// switch(a) {
//     case 'block': console.log('block'); break;
//     case 'none': console.log('none'); break;
//     case 'inline': console.log('inline'); break;
//     default: console.log('other');
// }

// let a = 0 || 'string';
// let a = 1 && 'string';
// let a = null || 25;
// let a = null && 25;
// let a = null || 0 || 35;
// let a = null && 0 && 35;

// console.log(a);

// let c = 12 + 14 + '12';
// let c = 3 + 2 - '1';
// let c = '3' + 2 - 1;
// let c = true + 2;
// let c = +'10' + 1;
// let c = undefined + 2;
// let c = null + 5;
// // let c = true + undefined;

// console.log(c);

// let isFinish,  i = 10;

// while (!isFinish) {
//     console.log(i);
//     isFinish = !i--;
// };

// let str = 'I am in the easycode';
// // let i = str.toUpperCase(str);

// for( i = 3; i = 6) {
//    if 
// }

// console.log(str[i]);      <==

// let str = 'tseb eht ma i';
// let i = str.length;

// while (i--) {
//     console.log(str[i]);
// }


// let i = 10;

// for (i >= 0; i-- ) {
//     console.log(i)
// };


// let count = 1;

// for(let i = 1; i < 10; i++){
//     count *= i
//     console.log(i)
// }

// console.log(count)


//          << Урок 3  >>

//              № 1

 function multiply(...arr){

    // let res = x * arr;
    let count = 1;
    // for ( let i = 0; i < arr.length; i++ ) {
    //     count *= arr[i];

    // }

    for(let index in arr){
        count *= arr[index];
    }
    console.log("my count", count);
    
}

multiply(2, 2, 2, 2);

//              № 3

function reverseString(str) {
    // let value;
    // value = str.split('').reverse()
    // console.log(value.join(''));

        let strSum = '';

    for (i = str.length; i--;) {
        strSum += str[i];
      
    }
    // console.log(strSum);
}; 

reverseString('test of alcohol');
reverseString('ronopu');

//              № 4

function getCodeStringfromText(text) {
    
    let strNew = '';
    

for (let i = 0; i < text.length; i++ ) {

    let newCode = text.charCodeAt(i);
    strNew += ' ' + newCode;
   
}

console.log(strNew);
}

getCodeStringfromText('hello bro')


//              № 6

function funcMain(arr, handler) {

    // let arrSum = arr.join('$');
    let newString = '';

    for (let i = 0; i < arr.length; i++) {

    newString += handler(arr[i]);
    }
  
    console.log( 'New value: ' + newString);

}

funcMain(['my', 'name', 'is', 'Trinity'], function(el) {
    let bigL = el[0].toUpperCase() + el.slice(1);
    return  bigL;
});

funcMain(['10', '20', '30', '40'], function(el) {
    let multy = el * 10;
    return  multy + ', ';
});

funcMain(['abc', '123'], function(el) {

    let invert = '';

    for ( let a = el.length; a--; ) {
        
        invert += el[a]
    }
    
    return  invert + ', ';
});


//          << Урок 4  >>

//              № 1, 2

function doubleArray(arr) {

    let joinedArray = arr.concat(arr);
    let arrayLast = arr[arr.length -1];

    console.log(joinedArray);
    console.log(arrayLast);

    return joinedArray;
}

doubleArray([1, 2, 3]);
doubleArray([5, 9, 23]);

//              № 3


function getArray(numb) {
    let sum1 = '';
    
    for (let i = 1; i <= numb; i++) {
        
        sum1 += i + ',';
            
    }

    console.log(sum1);

    newArray = sum1.split(',');
    newArray.pop();

    console.log(newArray);
}

getArray(10);
getArray(12);

//              № 4

function changeColection(arrCame) {

    let arrOut = [];
    for ( let i = 0; i < arrCame.length; i++) {

        arrOut += arrCame[i].shift();

    }
    console.log(arrOut);
    console.log(arrCame);

    return arrCame;

}

changeColection( [ [1, 2, 3], ['a', 'b', 'c'], [32, 25, 47 ], ['blue', 'white'] ] );


//              № 1

function sortString(text) {

    let arrSumbol = [];

    arrSumbol = text.split('');
    arrSumbol = arrSumbol.sort();

    let textSort = arrSumbol.join('');

    console.log(textSort);

}

sortString('bcdaeflmjgkhi');
sortString('jtmyoihnoihug');

//              № 2

function sortArray(arr) {
    let newArray = [];

    newArray = arr.sort(function (prev, next) {
        return prev - next;
    });

    newArray = newArray.reverse();

    console.log(newArray);
}

sortArray([2, 4, 7, 1, -2, 10, -9]);

//              № 3

function getNewArray(arr, numb1, numb2) {
   
    let newArr = arr.splice(numb1, numb2);

    console.log(newArr);

}

getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4);

//              № 4

// let array1 = ['one', 2, 'three', 4];

// let arrayDuble = array1.concat(array1);

// console.log(arrayDuble);

//              № 5, 6

let array1 = [1, 2, 3, 4, 5];

let arrayDel = [];

arrayDel = array1.splice(2, 2, 'three', 'four');

console.log(array1);

//              № 7

let arrAny = ['I', 'am', 'an', 'array'];

let arrAny2 = [];

arrAny2 = arrAny.splice(3, 0, 'awesome');

console.log(arrAny);

//              № 8

let arrayArr = [ [14, 45], [1], ['a', 'c', 'd'], [3], [7] ];

arrayArr.sort();

// console.log(arrayArr);

//              № 9

let copyArr = [].concat(arrayArr);

console.log(copyArr);

//              № 10

let arrCPU = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'intel', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'intel', info: {cores: 4, cache: 2}},
];

let cpuSort = [];
cpuSort = arrCPU.sort((prev, next) => prev.info.cores - next.info.cores);

console.log(cpuSort);

//              № 11

const products = [
    {title: 'prod1', prise:5.2},
    {title: 'prod2', prise:0.18},
    {title: 'prod3', prise:15},
    {title: 'prod4', prise:25},
    {title: 'prod5', prise:18.9},
    {title: 'prod6', prise:8},
    {title: 'prod7', prise:19},
    {title: 'prod8', prise:63},
];

function filterCollection(goods, low, high) {
    let goodsSort = [];
    let goodsSortRange = [];

    goodsSort = goods.sort((prev, next) => prev.prise - next.prise);

    console.log(goodsSort);

    for ( let i = 0; i <= goodsSort.length; i++ ) {
        if ( goodsSort[i] < low ) { continue;}

        goodsSortRange += goodsSort[i]; 
    }
    
    console.log(goodsSortRange);
}

filterCollection(products, 15, 30);

