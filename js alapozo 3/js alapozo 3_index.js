let myFirstVar = 'Hello';
myFirstVar = 5;

const onlyOnce = 'Wordl';
//onlyOnce = 'Hello';


const s1 = 'I am a string';
const s2 = "Also a string";
const s3 = 'String between backtick';

const age = 27;
const text = 'I am ${age} years old';
const text2 = 'I am ' + age + ' years old';

const n1 = 5;
const n2 = 3.443333;
const n3 = Number('3');
const n4 = Number('not a number');

let isValid = true;
isValid = false;

let num = 5;

const foo = (n) => {
    n = n * 2;
    return n;
};

num = foo(num);

const o = {
    name: 'Zizi',
    favoriteNumber: 5
};

const a1 = [1, 2, 3];
const a2 = [1, 'Zizi', true];

a1.push(23);
a1.forEach(item => console.log(item));


const f = (a, b) => { return a + b; };

function f2(a, b) {
    return a + b;
};

console.log(f(5, 6));
console.log(f('Zi', 'zi'));
console.log({}, {});