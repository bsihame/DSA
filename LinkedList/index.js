//linked list
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// let head = new Node(2);
// let nextHead = new Node(3);
// let third = new Node(4);
// let fourth = new Node(5);
// let fifth = new Node(6);

// head.next = nextHead;
// nextHead.next = third;
// third.next = fourth;
// fourth.next = fifth;
// // console.log(head)

// const findOdds = (head) => {
//   let output = []; 
//   let current = head;
//   while(current) {
//       if(current.val % 2 === 1) {
//           output.push(current.val);
//       }
//       current = current.next; 
//   }
//   return output;
// }

// console.log(findOdds(head));


// Node {
//   node: 2,
//   next: Node { node: 3, next: Node { node: 4, next: [Node] } }
// }
//============================================================
//Write a function that takes in a linked list and 
// returns an array of all the odd values that the list 
// contains. 

// HINT: While loops
//Sometimes think, can I use two pointers traveling at 
// different speeds.


class NodeOdd {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let headOdd = new NodeOdd(4);
let nextHeadOdd = new NodeOdd(5);
let thirdOdd = new NodeOdd(6);
let fourthOdd = new NodeOdd(7);
let fifthOdd = new NodeOdd(8);
let sixthOdd = new NodeOdd(9);

headOdd.next = nextHeadOdd;
nextHeadOdd.next = thirdOdd;
thirdOdd.next = fourthOdd;
fourthOdd.next = fifthOdd;
fifthOdd.next = sixthOdd;

const findOdds = (head) => {
  let output = [];
  let current = headOdd;
  while (current) {
    if (current.value % 2 === 1) {
      output.push(current.value)
    }
    current = current.next;
  }
  return output
}
console.log(findOdds(headOdd))

// initials the Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// declare  the linked list
let head = new Node(6);
let nextHead = new Node(8);
let third = new Node(6)
let fourth = new Node(9);
// create the linked list
head.next = nextHead;
nextHead.next = third
third.next = fourth

// let create and array and has only even number

const evenNum = (head) => {
  let newArr = [];
  let currentHead = head;
  while (currentHead) {
    if (currentHead.val % 2=== 0) {
      newArr.push(currentHead.val)
    }
    currentHead =currentHead.next
  }
  return newArr
}
console.log(evenNum(head))

