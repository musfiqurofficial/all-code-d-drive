// create object using object literals
const player = {};
player.name = 'Musfiq';
player.specialty = 'batman';
player.position = 'opening';
player.bat = function () {
    console.log('Game Start');
}


const student = {
    name: 'Panday',
    job: 'Police',
    rank: function () {
        console.log('2Star');
    },
    salary: 19000
}

const food = new Object();
console.log(food);

const phone = Object.create(student);
console.log(phone.name);

// class

class Person {
    name = 'Fahim';
    address = 'Jalokathi';
    constructor(age) {
        this.age = age;
    }
}


const person1 = new Person(56);
console.log(person1);


function car(model, price) {
    this.model = model;
    this.price = price;
}