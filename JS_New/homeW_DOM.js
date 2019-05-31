// let linkHead = document.head;
// let linkBody = document.body;
// let childNods = document.body.childNodes;
// let firstChildNods = document.body.firstChild;
// let nodes = document.childNodes,
//     last = nodes[nodes.length-1];

// console.log(linkHead);
// console.log(linkBody);
// console.log(childNods);
// console.log(firstChildNods);
// console.log(nodes);

// let divQuery = document.querySelectorAll('div p');

// let divChoise = divQuery[1];

// console.log(divChoise);

//              № 22/1  Done

// function isParent(parent, child) {

//    let check = parent.contains(child);

//     console.log(check);
// }

// isParent(document.body.children[0], document.querySelector('mark'));
// isParent(document.querySelector('ul'), document.querySelector('mark'));

//              № 22/2 Done

// let link = document.getElementsByTagName('a');

// for (let i = 0;  i < link.length; i++) {
//     if (!link[i].closest('ul')) {
//         console.log(link[i]);
//     }
// }
// console.log(link);

//              № 22/3 Done

// let link = document.querySelector('ul');

// let prev = link.previousElementSibling;
// let next = link.nextElementSibling;

// console.log(prev);
// console.log(next);

//              № 22/4  Done

// let link = document.getElementsByTagName('li');
// let sum = '';

// for (let i = 0;  i < link.length; i++) {
//     sum = i + 1;
// }

// console.log(sum);


    //              № 23/1  Done

    // let paragraph = document.querySelector('p');

    // console.log(paragraph.textContent);

    //              № 23/2  Done

// function nodeDOM(elem) {

//     let obj = {
//     count: null,
//     tagName: null
// };
// obj.count = elem.children.length;
// obj.tagName = elem.tagName;
// console.log(obj);
// }

// nodeDOM(document.querySelector('ul'));
// nodeDOM(document.querySelector('a'));


    //              № 23/3  Done

// let arr = document.querySelectorAll('li');

// console.log(arr[0].textContent);

// // let arr1 = arr.push.textContent;

// let getText = '';

// for (let i = 0; i < arr.length; i++) {
//    getText += arr[i].textContent +",";

// }
// let getTextFromUl = getText.split(',');
// getTextFromUl.pop();

// console.log(getTextFromUl);

 
    //              № 23/4 Done

    // let paragraph = document.querySelector('p');

    // let newParagraph = paragraph.firstChild.data = '-text-';
    //     newParagraph = paragraph.lastChild.data = '-text-';

    // console.log(newParagraph);
    // console.log(paragraph);

    //              № 23/5 (1) Done

// let list = document.querySelector('ul');

// list.setAttribute('class', 'string');

// console.log(list);

    //              № 23/6 (2) Done

// let link = document.querySelector('ul');

// let next = link.nextElementSibling;

// next.setAttribute('id', 'link');

// console.log(link);
// console.log(next);

    //              № 23/7 (3) Done

// let link = document.querySelectorAll('li');

// console.log(link);

// link[0].setAttribute('class', 'item');
// link[2].setAttribute('class', 'item');

// console.log(link);

    //              № 23/8 (4) Done

// let link = document.querySelectorAll("a");

// console.log(link);

// for (let i = 0; i < link.length; i++) {

//     link[i].setAttribute('class', 'custom-link');

//  console.log(i);
// }
// console.log(link);


    //              № 24/1 Done

// let link = document.querySelector('ul li');

// console.log(link);

// link.insertAdjacentHTML('beforebegin', '<li><a href="#"> Link0 </a></li>');

// let list = document.querySelector('ul');
// console.log(list);

    //              № 24/2 Done

// let link = document.querySelectorAll('li a');

// console.log(link[0]);

// for (let i = 0; i < link.length; i++) {
//     link[i].insertAdjacentHTML('afterend', '<strong>Span</strong>');
// }

// let list = document.querySelector('ul');
// console.log(list);

    //              № 24/5 Done

// let body = document.body;

// console.log(body);

// body.insertAdjacentHTML('beforebegin', '<img src=../HTML&CSS/Barbershop-code/img/Layer 21.png, alt = Барбершоп Бородинский>');


    //              № 24/4 Done

// let mark = document.querySelector('mark');

// console.log(mark);

// mark.insertAdjacentText('beforeend', ' green');
// mark.setAttribute('class', 'green');


    //              № 24/5 

// let link = document.querySelectorAll('li');

// console.log(link[0].textContent);

// let link2 = [];

// for (let i = 0; i < link.length; i++) {
//     link2 += link[i].textContent +',';
// }

// let getText = link2.split(',');
// getText.pop();
// getText.sort();

// console.log(getText);

    //              № 26/1 Done

// let btnMsg = document.getElementById('btn-msg');

// btnMsg.addEventListener('click', handler) ;

// function handler() {
//     alert(btnMsg.textContent);
// }

// console.log(btnMsg);

    //              № 26/2

// let btn = document.querySelector('button');

// console.log(btn);

// btn.onmouseover = function handler() {
//     btnMsg.classList.add('is-invalid');
//     console.log('work');
// }

    //              № 26/3  Done

// let tag = document.getElementById('tag');
// let body = document.body;

// console.log(tag);

// body.addEventListener('click', handler) ;

// function handler() {
//     alert(tag.textContent);
// }

    //              № 26/4

    //              № 26/5