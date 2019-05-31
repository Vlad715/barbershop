let soldier = {
    health: 400,
    armor: 80,
    uron: 55
}

let John = {
    health: 100
};

John.__proto__ = soldier;

console.log(John);
console.log(John.uron);