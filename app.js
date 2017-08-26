class Person {
    constructor(f, l) {
        this.firstname = f;
        this.lastname = l;
    }

    greet() {
        return 'Hi ' + this.firstname;
    }
}

Person.middlename = 'my middlename';

class Zhang extends Person {
    constructor(firstname) {
        super(firstname, 'zhang');
    }

    greet() {
        return 'Yo ' + this.firstname + ' ' + this.lastname;
    }

}

var john = new Person('john', 'doe');
var kim = new Person('kim', 'doe');

console.log(john);
console.log(kim);

var ian = new Zhang('ian');
console.log(ian.greet());

console.log(ian);

//john.middlename = 'updated middlename';
//console.log(john.middlename);
console.log(kim.middlename);




