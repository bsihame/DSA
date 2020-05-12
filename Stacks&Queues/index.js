//Stack ==> First in last out ==> FILO
// Can be implemented as an array or linked list.

// Stack === FILO :=> StacksAPI or method ===> push, pop, isEmpty, peek

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// // declare  the linked list
// let head = new Node(6);
// let nextHead = new Node(8);
// let third = new Node(6)
// let fourth = new Node(9);
// // create the linked list
// head.next = nextHead;
// nextHead.next = third
// third.next = fourth

class Stack {
  constructor() {
    this.stack = stack;
  }
  pop() {
    return this.stack.pop()
  }
  push(value) {
    return this.stack.push(value)
  }
  isEmpty() {
    return this.Stack.length === 0;
  }
  peek() {
    return this.stack[this.stack.length-1]
  }
}

// write a function that takes a Stack and find a product of that stack

class Stack1 {
  constructor(stack = []) {
    this.stack = stack;
  }
  pop() {
    return this.stack.pop();
  }
  push(val) {
    return this.stack.push(val);
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0
  }
}

// const findProduct = (stack) => {
//   if (stack.isEmpty()) return 0;
//   let prod = 1;
//   let newStack = new Stack1();
//   while (!stack.isEmpty()) {
//     let num = stack.pop();
//     console.log(num + " popped")
//     prod *= num;
//     console.log( prod+ " product")
//     newStack.push(num)
//     console.log(newStack , " while1")
//   }
//   while (!newStack.isEmpty()) {
//     stack.push(newStack.pop())
//     console.log(newStack , " while2")

//   }
//   console.log(prod + "line 76")
//   return prod
// }
// let newStack = new Stack1([1, 2, 3, 4, 5, 6, 7, 8])
// console.log(findProduct(newStack))


//steps:

// [object Object] before while loop
// 8 popped
// 1 * 8 = 8 product
// Stack1 { stack: [ 8 ] }  while1
// 7 popped
// 8 * 7 = 56 product
// Stack1 { stack: [ 8, 7 ] }  while1
// 6 popped
// 336 product
// Stack1 { stack: [ 8, 7, 6 ] }  while1
// 5 popped
// 1680 product
// Stack1 { stack: [ 8, 7, 6, 5 ] }  while1
// 4 popped
// 6720 product
// Stack1 { stack: [ 8, 7, 6, 5, 4 ] }  while1
// 3 popped
// 20160 product
// Stack1 { stack: [ 8, 7, 6, 5, 4, 3 ] }  while1
// 2 popped
// 40320 product
// Stack1 { stack: [
//     8, 7, 6,
//     5, 4, 3,
//     2
//   ] }  while1
// 1 popped
// 40320 product
// Stack1 { stack: [
//     8, 7, 6,
//     5, 4, 3,
//     2, 1
//   ] }  while1
// Stack1 { stack: [
//     8, 7, 6,
//     5, 4, 3,
//     2
//   ] }  while2
// Stack1 { stack: [ 8, 7, 6, 5, 4, 3 ] }  while2
// Stack1 { stack: [ 8, 7, 6, 5, 4 ] }  while2
// Stack1 { stack: [ 8, 7, 6, 5 ] }  while2
// Stack1 { stack: [ 8, 7, 6 ] }  while2
// Stack1 { stack: [ 8, 7 ] }  while2
// Stack1 { stack: [ 8 ] }  while2
// Stack1 { stack: [] }  while2
// 40320line 76
// 40320


// we can de product like that but we are mutating the array

const findProduct2 = (stack) => {
  if (stack.isEmpty()) return 0;
  let prod = 1
  while (!stack.isEmpty()) {
    prod *= stack.pop()
  }
  return prod
}
let stack = new Stack1([1, 2, 3, 4, 5, 6, 7, 8])
console.log(findProduct2(stack))
