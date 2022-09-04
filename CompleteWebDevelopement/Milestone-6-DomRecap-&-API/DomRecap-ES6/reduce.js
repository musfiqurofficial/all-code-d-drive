const numbers = [2, 5, 6, 8, 12, 23, 19, 32];
const total = numbers.reduce((previous, current) => previous + current, 0);

const names = ['musfiq', 'rahman', 'Fatema']

const totalNames = names.reduce((x, y) => x + y);
console.log(totalNames)
console.log(total)



