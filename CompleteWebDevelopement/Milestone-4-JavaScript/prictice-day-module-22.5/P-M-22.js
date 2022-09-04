// const country = 'Bangladesh';
// let age = 22;
// const isMarried = false;
// let student = {
//     id: 180095,
//     name: 'Md. Musfiqur Rahman',
//     department: 'CSE',
//     age: age
// }
// const friends = [22, 24, 23, 21, 22, 25]
// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof student);
// console.log(Array.isArray(friends));
// //array er moddhe ache kina ber kora
// console.log(friends.includes(22));
// console.log(friends.indexOf(36));

const friends = [22, 24, 23, 21, 22, 25, 29, 25, 18, 19, 20]
console.log(friends);
//slice shudhu array theke element ber kore output e dekhay array ke update kore na
const partial = friends.slice(2, 5);
console.log(partial);
console.log(friends);
//splice dara array theke element delete korye pari koto theke index splice suru korbo, koyta delete korbo, koyta add korbo. and splice array update kore
const partialSplice = friends.splice(1, 4);
const partialSplices = friends.splice(1, 4, 'Md. Musfiqur Rahman', 'Md. Rashedul Islam');
console.log(partialSplice);
console.log(partialSplices);
console.log(friends);