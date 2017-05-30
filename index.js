// let a = [1, 2, 3];
// let b = a;
// a[1] = 5;

// console.log(a);
// console.log(b);

// let a = { val1: 'asd', val2: 'fsdf' };
// let b = Object.assign({}, a);

// a.val1 = 5;

const { List, Map } = require('immutable');

let a = List([1, 2, 3]);
let b = a;

a = a.set(0, 5);
b = b.get(0);

console.log(a);
console.log(b);
