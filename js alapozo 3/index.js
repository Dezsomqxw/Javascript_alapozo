let myFirstVar = 'Hello';
myFirstVar = 5;

const onlyOnce = 'Wordl';
//onlyOnce = 'Hello';

const s1 = 'I am a string';
const s2 = "Also a string";
const s3 = 'String between backtick';

const age = 27;
const text = `I am ${age} years old`;
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

o.name = 'Xz';
o.favoriteNumber = 5;
console.log(o.name);

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

const f3 = i => i.foo();

//f3(3);

let pet = {
    name: 'Kitty',
    type: 'cat'
};

const bar = p => {
    p = {
        name: 'Doggy',
        type: 'dog'
    };
    return p;
};

console.log('Változó értéke a bar függvény előtt ', pet);
pet = bar(pet);
console.log('Változó értéke a bar függvény után ', pet);

const pet2 = {
    name: 'Sammy',
    type: 'snake'
};

const bar2 = p => {
    p.name = 'Hammy';
    p.type = 'hamster';
};

console.log('Változó értéke a bar függvény előtt ', pet2);
bar2(pet2);
console.log('Változó értéke a bar függvény után ', pet2);

let v;

console.log(v);

v = null;

console.log(v);

v = undefined;

const a = '5';
const b = 5;
console.log(a == b);
console.log(a === b);

const p1 = { name: 'Zizi' };
const p2 = { name: 'Zizi' };

console.log(p1 === p2);
console.log(p1 == p2);

const p3 = p1;

console.log(p1 === p3);
console.log(p1 == p3);

let d = 5;

d = '5';

d = [1, 2, 3];

d = i => console.log(i);

d('JavaScript');

const makeClosure = () => {
    const name = 'Closure';
    const displayName = () => {
        alert(name);
    }
    return displayName;
};

const testFn = makeClosure();
testFn();

const isPositive = (n) => {
    if (n >= 0) {
        console.log('positive');
    } else {
        console.log('negative');
    }
};

isPositive(5);
isPositive(-5);

const isTruthy = (v) => {
    if (v) {
        console.log('Truthy');
    } else {
        console.log('Falsy');
    }
};

isTruthy({});
isTruthy('');

const mapToStars = n => {
    let res;
    switch (n) {
        case 1: res = '*'; break;
        case 2: res = '**'; break;
        case 3: res = '***'; break;
        case 4: res = '****'; break;
        case 5: res = '*****'; break;
        default: res = '-'; break;
    }
    return res;
}

console.log(mapToStars(2));
console.log(mapToStars(0));

const throwIffalsy = v => {
    if (!v) {
        throw new Error('Falsy value');
    }
};

try {
    throwIffalsy('Truthy');
    console.log('success');
} catch (err) {
    console.error('Caught error', err);
}

try {
    throwIffalsy('Falsy');
    console.log('success2');
} catch (err) {
    console.error('Caught error2', err);
}

for (let i = 0; i <= 4; i++) {
    console.log('For loop', i + 1);
}

let i = 0;
while (i <= 4) {
    console.log('While loop', i + 1);
    i++;
}

let x = 5;
let y = 4;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// x = x + y;
x += y;
console.log(x);

// x = x + 1;
x++;

console.log(!true);
console.log(!{});

console.log(true && true);
const e1 = 'Cat' && 'Dog';
const e2 = false && 'Cat';
const e3 = 'Cat' && 'false';

console.log(e1, e2, e3);

console.log(false || false);
const e4 = 'Cat || Dog';
const e5 = false || 'Cat';
const e6 = 'Cat' || false;
const e7 = true || false;

console.log(e4, e5, e6, e7);

console.log('Web' + 'uni');

// ?:
const isAdult = age => {
    let res;
    res = age <= 18 ? false : true;
    return res;
}

console.log(isAdult(16));
console.log(isAdult(22));

// delete

const person = {
    name: 'John',
    email: 'john@example.com'
}

delete person.email;

console.log(person);

// typeof, instanceof
console.log(typeof 5);
console.log(typeof 'a string');
console.log(typeof []); // Object
console.log(typeof {}); // Object 
console.log(typeof new Date()); //Object
console.log(typeof (() => { })); // Function
console.log([] instanceof Array);
console.log([] instanceof Object);
console.log({} instanceof Object);
console.log(new Date() instanceof Date);

document.addEventListener('DOMContentLoaded', () => {
    const email = localStorage.getItem('email');
    if (email) {
        document.getElementById('email').setAttribute('value', email);
    }
    let counter = localStorage.getItem('counter');
    if (counter) {
        document.getElementById('counter').InnerText = counter;
    }
    document.getElementById('submit').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        console.log(email);
        console.log(document.querySelector('#feedback').value);
        localStorage.setItem('email', email);
        document.getElementById('feedback').value = '';
        let counter = parseInt(localStorage.getItem('counter'))
        if (!counter) {
            counter = 0;
        }
        counter++;
        localStorage.setItem('counter', counter);
        document.getElementById('counter').innerText = counter;
    });
    document.getElementById('list-element-input').addEventListener('change', event => {
        const numOfElements = parseInt(event.target.value);
        const list = document.querySelector('ul');
        list.innerHTML = '';
        for (let i = 0; i < numOfElements; i++) {
            list.innerHTML = list.innerHTML + `<li>${i + 1}</li>`
        }
    })
});

