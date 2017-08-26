if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('')
        }

        function F() {}
        F.prototype = o
        return new F();
    }
}

var person = {
    firstname : 'Default',
    lastname: 'Default',
    hello: function() {
        console.log('hello', this.firstname);
    }
}

var john = Object.create(person);
console.log(john);
console.log(john.hello());

//--------------------------

function People(f, l) {
    this.firstname = f;
    this.lastname = l;
    
    this.hello = function() {
        console.log('hello', this.firstname);
    }
}

var smith = new People('smith', 't');
console.log(smith);
smith.hello();

//---------------------------

