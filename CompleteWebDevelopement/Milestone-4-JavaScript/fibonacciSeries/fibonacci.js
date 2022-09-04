//Fibonacci Serises

// const fibo = [0, 1];
// for (let i = 2; i <= 15; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// // console.log(fibo);

function fibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
// console.log(fibonacci(10));

let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);