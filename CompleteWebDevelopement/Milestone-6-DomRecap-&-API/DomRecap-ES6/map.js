// const newNum = [];
// let sum = 0;
// for (const number of numbers) {
//     const doubled = Math.pow(number, 2)
//     newNum.push(doubled)

// }
// // console.log(newNum);

// for (const i = 0; i > newNum.length; i++) {
//     sum = sum + newNum[i];
//     // sum += doubled[i]
//     // console.log(sum);
//     // newNum.push(sum)
// }
// console.log(sum);

const numbers = [2, 8, 4, 9, 10, 50, 25];

const names = ['musfiqur', 'rahman', 'fatema', 'nisa']




const half = numbers.map(x => x / 2)
const secondElement = names.map(x => x[1]);
const nameLength = names.map(x => x.length);
// console.log(half);
// console.log(nameLength);



const student = {
    name: 'Fredie',
    age: 26,
}
console.log(student.age);