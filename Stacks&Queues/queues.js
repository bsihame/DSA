// // Queues => FIFO => first in first ou line in the restaurant
// //  Queues API ==>  enqueue, dequeue, isEmpty, peek
// // Enqueue is the term that describes to enter the queue.
// // Dequeue means to leave the queue.

// // Queue Methods
// // enqueue(value) : Add new element to the end of the queue.
// // dequeue() : Removes element from beginning of the queue and returns it.
// // peek() : Returns the element from beginning of the queue without removing it.
// // isEmpty() : Returns a boolean indicating if the queue is empty or not.

// // Queue Implementation
// // Array Implementation
// // Linked List Implementation
// // Double Stack Implementation

// // task write your own queue class. 
// // write a function that takes in a queue and returns the largest value 
// //in the queue. 
// // Bonus: 
// // Do not leave the q mutated. 
// //Do the previous problems recursively, linked list on included. 



// class Queue {
//   constructor(q = []) {
//     this.q = q;  
//   }
//   enqueue(val) {
//     this.q.push(val)
//   }
//   dequeue() {
//     return this.q.shift()
//   }
//   peek() {
//     return this.q[0]
//   }
//   isEmpty() {
//     return this.q.length === 0
//   }
// }
// const findLargest = (queue) => {
//   if (queue.isEmpty()) return;
//   let max = q.peek();
//   while (!queue.isEmpty()) {
//    max = Math.max(max, queue.dequeue())
//   }
//   return max
// }
// // let q = new Queue([5, 6, 7, 8, 9, 10])
// // console.log(findLargest(q));

// const findMin = (queue) => {
//   if (queue.isEmpty()) return;
//   let min = q.peek();
//   while (!queue.isEmpty()) {
//     min = Math.min(min, queue.dequeue())
//   }
//   return min
// }

// let q = new Queue([5, 6, 7, 8, 9, 10, -111])
// console.log(findMin(q))

// console.log(q)

const sameCase = (str) => {
	if(str === str.toUpperCase()){
		return true
	} else {
		return false
	}
}
console.log(sameCase("hello"))