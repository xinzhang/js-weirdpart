var a = 3;
console.log(typeof a);

var b = "hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d);

console.log(Object.prototype.toString.call(d));

function Person(name) {
    this.name = name;
}

console.log('Person', typeof Person);

var e = new Person('name');
console.log('e', typeof e);
console.log('e', e instanceof Person);

function abc() {
    return 'fff';
}

console.log('abc', typeof abc);
console.log('abc', typeof (new abc()));

console.log('undefined', typeof undefined);
console.log('null', typeof null);

//console.log(3 == '3');
//console.log(3 === '3');



