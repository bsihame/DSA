// Count down to zero
console.log("count down to zero")

const countDownToZero = (num) => {
  // Let set first set a base case
  if (num <= 0) return;
  console.log(num);
  countDownToZero(num-1)
}
console.log(countDownToZero(10))

console.log("count up by 2")

const countUp = (min, max) => {
  if (max < min) return;
  console.log(min);
  countUp(min + 2, max)
}
console.log(countUp(0, 10))

console.log("Factorial");

const factorialRec = (num) => {
  if (num < 0) return ("No negatives!");
  if (num <= 1) return 1;
  return factorialRec(num - 1)* num
}
console.log(factorialRec(5))

