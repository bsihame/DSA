// Count down to zero
// console.log("count down to zero Iterative Loops method");
// const countDownToZeroIterative = (num) => {
//   for (let i = num; i > 0; i--) {
//     console.log(i)
//   }
// }
// console.log(countDownToZeroIterative(10))

// console.log("count down to zero Recursive method");

// const countDownToZero = (num) => {
//   // Let set first set a base case
//   if (num <= 0) return;
//   console.log(num);
//   countDownToZero(num-1)
// }
//  console.log(countDownToZero(10))
// console.log("-------------------------------")

// console.log("count up by 2 Iterative method");
// const countUpIterative = (start, to) => {
//   for (let i =start; i <= to; i =i+2) {
//     console.log(i)
//   }
// }
// console.log(countUpIterative(0, 10));


// console.log("count up by 2 Recursive method")

// const countUp = (min, max) => {
//   if (max < min) return;
//   console.log(min);
//   countUp(min + 2, max)
// }
// console.log(countUp(0, 10))

console.log("-------------------------------")

console.log("Factorial Iterative method");

const factorialIterative = (num) => {
  let result = num;
  if (num === 0 || num === 1) return 1;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result
}
console.log(factorialIterative(5));

console.log("Factorial Recursive method");

const factorialRec = (num) => {
  if (num < 0) return ("No negatives!");
  if (num <= 1) return 1;
  return factorialRec(num - 1)* num
}
console.log(factorialRec(5))

