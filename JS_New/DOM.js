let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let ul = document.querySelector('.list-group');
// let deleteBtns = document.getElementsByClassName('.delete-item');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];

function generateId() {
    let id = '';
    let words = '0123456789gwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    for (let i = 0; i < 15; i++) {
        let position = Math.floor(Math.random() * words.length);
        id += words[position];
    }
    return id;
}

function listTemplate(task) {
    // Create list items
    let li = document.createElement('li');
    li.className = "list-group-item d-flex align-items-center";
    let span = document.createElement('span');
    span.textContent = task;
    // Create tag i fa-trash-alt
    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-4';
    let iEdit = document.createElement('i');
    iEdit.className = 'fas fa-edit edit-item ml-auto';

    // Append delete icon to li
    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {
    clearList();

    for ( let i = 0; i < tasksArray.length; i++ ) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
     }
    //  setDeleteEvente();
}

function addList(list) {
    tasks.unshift(list);
    // generateList(tasks);
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
    // alert.className = 'alert-success';
    alert('Task added success!');
    

    // Add to localStorege
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

generateList(tasks);

// function setDeleteEvente() {
//     for ( let i = 0; i < deleteBtns.length; i++ ) {
//         deleteBtns[i].addEventListener('click', function (e) {
//             console.log('click');
//         });
//     }
// }

function deleteListItem(target) {
    let parent = target.closest('li'); 
    let text = parent.textContent;
    let index = tasks.indexOf(text);
    tasks.splice(index, 1);
    alert('Task has been removed success');
    parent.remove();
    
    // Update to localStorage 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
}
    
ul.addEventListener('click', function (e) {

    if ( e.target.classList.contains('delete-item') ) {
        deleteListItem(e.target);
    } else if (e.target.classList.contains('edit-item')) {
        let span = e.target.closest('li').querySelector('span');
        span.setAttribute('contenteditable', true);
        span.focus();

    }
});
    // Delete list item
    // 1 найти родителя
    // 2 удалить родителя
    // 3 splise, index, indexOf, text 


// let btn = document.querySelector('.clear-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!inputText.value) {
        // show arror
        inputText.classList.add('is-invalid');
    } else {
        inputText.classList.remove('is-invalid');
        addList(inputText.value);
        form.reset();
            }

    // 1. get input text value
    // 2. addList()  || insertAdjacement
    // 'pasition', element
});

inputText.addEventListener('keyup', function (e) {
    if ( inputText.value ) {
        inputText.classList.remove('is-invalid');
    }
    // this === inputText;

});

// function onClick(e) {
//     console.log('click 1', e);
// }
// function onClick2(e) {
//     console.log('click 2', e);
// }

// btn.addEventListener('click', onClick);
// btn.addEventListener('click', onClick2);

// btn.removeEventListener('click', onClick2);

// console.dir(btn);


// let body = document.body;
// let taskWrap = document.querySelector('.tasks-wrap');
// let container = document.querySelector('.container');
// let listCard = document.querySelector('.list-card');
// let cardBody = document.querySelector('.list-card, .card-body');
// let listGroup = document.querySelector('.list-group');

// // Погружения

// listGroup.addEventListener('click', function (e) {
//     console.log('.list-group');
// }, true);

// cardBody.addEventListener('click', function (e) {
//     console.log('.list-card, .card-body');
// }, true);

// listCard.addEventListener('click', function (e) {
//     // e.stopImmediatePropagation();
//     console.log('.list-card');
// }, true);

// container.addEventListener('click', function (e) {
//     console.log('.container');
// }, true);

// taskWrap.addEventListener('click', function (e) {
//     console.log('.tasks-wrap');
// }, true);

// body.addEventListener('click', function (e) {
//     console.log('body');
// }, true);

// // Всплития

// listGroup.addEventListener('click', function (e) {
//     console.log('.list-group');
// });

// cardBody.addEventListener('click', function (e) {
//     console.log('.list-card, .card-body');
// });

// listCard.addEventListener('click', function (e) {
//     // e.stopImmediatePropagation();
//     console.log('.list-card');
// });

// container.addEventListener('click', function (e) {
//     console.log('.container');
// });

// taskWrap.addEventListener('click', function (e) {
//     console.log('.tasks-wrap');
// });

// body.addEventListener('click', function (e) {
//     console.log('body');
// });