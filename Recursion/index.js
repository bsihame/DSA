
console.log("count down to zero Iterative Loops method");
const countDownToZeroIterative = (num) => {
  for (let i = num; i > 0; i--) {
    console.log(i)
  }
}
console.log(countDownToZeroIterative(10))

console.log("count down to zero Recursive method");

const countDownToZero = (num) => {
  // Let set first set a base case
  if (num <= 0) return;
  console.log(num);
  countDownToZero(num-1)
}
 console.log(countDownToZero(10))
console.log("-------------------------------");

console.log("count up by 2 Iterative method");
const countUpIterative = (start, to) => {
  for (let i =start; i <= to; i =i+2) {
    console.log(i)
  }
}
console.log(countUpIterative(0, 10));


console.log("count up by 2 Recursive method")

const countUp = (min, max) => {
  if (max < min) return;
  console.log(min);
  countUp(min + 2, max)
}
console.log(countUp(0, 10))

console.log("-------------------------------");

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

console.log("-------------------------------");

console.log("Product Iterative");

const productIterative = (arr) => {
  let product = 1;
  for (let i = 1; i <= arr.length; i++) {
    product *= i
  }
  return product
}
console.log(productIterative([1, 2, 3, 4]))

console.log("Product Recursively");

const productRecursive = (arr, i = 0) => {
  if (!arr.length) return 0;
  if (i >= arr.length) return 1
  return productRecursive(arr, i+1) * arr[i]
}
console.log(productRecursive([1, 2, 3, 4]));

const productRecursive2 = (array) => {
  let arr = [...array];
  const product = (arr) => {
    if(!arr.length) return 0;
    if (arr.length === 1) return arr[0];
    let el = arr.pop()
    return product(arr) * el
  }
  return product(arr)
}
console.log(productRecursive2([1, 2, 3, 4]))

console.log("-------------------------------");
// better way to do Sum for test
console.log("Sum recursively");

const sumRec = (arr, i = 0) => {
  if(i >= arr.length) return 0;
  return sumRec(arr, i + 1) + arr[i];
}
console.log(sumRec([1, 2, 3, 4]))
// this is not good because we mutate the array
const sum1 = (arr) => {
  if (!arr.length) return 0;
  let el = arr.pop();
  return sum1(arr) + el
}
console.log(sum1([1, 2, 3, 4]))


console.log("-------------------------------");
console.log("Fibonacci Recursive method");

const fibonacciRec = (num) => {
  if (num <= 1) return num;
  return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}
console.log(fibonacciRec(10))





