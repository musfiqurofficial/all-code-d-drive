// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

const number1 = [1, 3, 5, 7, 9];
const even = number1.map(x => x + 1)
console.log(even);


// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.
const number2 = [33, 50, 79, 90, 101, 30];

const divisibleByTen = number2.filter(x => x % 10 === 0);
// console.log(divisibleByTen);

// 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.
const number3 = [1, 9, 17, 22];

// reduce() diye
const total2 = number3.reduce((i, j) => i + j, 0);
console.log(total2);
// for loop diye
let sum = 0;
for (number of number3) {
    sum += number
}
console.log(sum)


// 1) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Raju', age: 22 },
]

const peopleAge = people.reduce(function (prev, cur) {
    return prev + cur.age;
}, 0);

console.log(peopleAge);

// console the valu of age
const student = {
    name: 'Fredie',
    age2: 26,
}
console.log(student.age2);

// console the value of city
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
};

console.log(data.location[0].city);

// Challenging:
/**
* Console the value of email
* Console the value of address
* Console the value of city
* Console the value of lat
* Console the value of company
name
 */
console.log("This Problem is very challenging. Let's try.");

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);