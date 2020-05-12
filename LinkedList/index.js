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

// Linked List Implementation
//  We want our 'Linked List' class to be able to do the following:

// 1. Hold a reference to the beginning or 'Head' of the list
// 2. Be able to add onto the list new Nodes
// 3. Keep track of how many elements/nodes we have

// Traverse and find elements / nodes in the list

// class Node {
//   constructor(value) {
//     // Head: This points to the first Node in the list at all times. 
//     // Once we are connected to the first Node, you can find every subsequent Node.
//     this.head = null;
//     // Tail: This points to the last Node at all times. 
//     // Allows us to push new Nodes to the end of the list in O(1) time.
//     this.tail = null;
//     // Length: This will be a simple Number value to keep track of the number of Nodes in the list. 
//     // Think of this as an accountant.
//     this.length = 0;
//   }
// }
// ||=====================================||
// ||note :                               ||
// ||let arr = []                         ||
// ||console.log(arr.length);//==> 0      ||
// ||=====================================||

//  Linked List Methods
// push(value) : Add new element to the beginning of the list. While pushing everything down.

// append(value) : Add new element to the end of the list. Keeping original order intact.

// print() : Prints all the elements in the list sequentially.

// nodeAt(index) : Returns value at the passed index.

// pop() : Removes the last element in the list and returns it.
// push(value)
// Adding a value at the front of the list is known as a push operation. This is also known as a head-first insertion. Because we have a Head pointer at all times this is extremely simple!

push(value) {

  // Create a new node and assign value
  let newNode = new Node(value);

  // Assign the current head to come after the new Node
  newNode.next = this.head;

  // Assign the new Head to be the new Node you created
  this.head = newNode;

  // If there is no tail yet let's make new Node a tail.
  if (!this.tail) {
    this.tail = newNode;
  }

  this.length++;

}
// append(value)
// The next operation we’ll look at is append. This is meant to add a value to the end of the list. This is known as tail-end insertion. This is also pretty easy and straight forward because we have a Tail pointer!

append(value) {
 const newNode = new Node(value);

 // If there is no head yet let's make new node our head AND tail
 if (!this.head) {
   this.head = newNode;
   this.tail = newNode;
   return;
 }

 // Else continue ...

 // Attach new node to the end of linked list
 this.tail.next = newNode;
 // Then make that the new Tail
 this.tail = newNode;

 this.length++;
}
// print()
// Let's say we want to print the list like the following:

// -> 1 -> 2 -> 3 -> null
// What is our approach? We need to actually go through each Node one by one and print right? Correct. This is called traversal. Traversing through a linked list and other linked data structures is very important.

print() {
  // Lets create a string to add onto 
  let display = "-> ";
  // We need a pointer variable that will start in the head and work its way down
  let pointer = this.head;
  
  // Keep traversing to the next aslong as pointer isn't null
  while(pointer !== null) {
    // Update display string 
    display += pointer.value + " -> ";
    // Update pointer to the next Node
    pointer = pointer.next;
  }
    
  // Display result
  console.log(display);    

}
// nodeAt(index)
// Lets say we want the following indexes:

// -> Apple -> Orange -> Lemon -> null

// fruits.nodeAt(0); // Apple
// fruits.nodeAt(2); // Lemon
// How would we go on about doing this? We need to traverse through the list like the previous example, but this time we stop at a counter.

nodeAt(index) {
  let counter = 0;
  let pointer = this.head;

  while(counter < index && pointer /* returns null if index > counter */) {
    pointer = pointer.next;
    counter++;
  }

  return pointer.value;
}

// This is fairly similiar to the previous traversal example. In this case we start with the 'Head', which happens to be 'Zero' index, then work our way down the nodes as long as the counter isn't matching the index we are searching for.

// Finally, when we do arrive at the index, we return the Node to the user. Where they can easily access the value or any associated pointers.

// pop()
// Finally, we have pop(). We want to be able to remove the last element of the list and get back that Node once the operation is done.

// How would we approach this?

// Check if the head is the tail. Why? That means there is only one Node in the list and we have both of our Head and Tail pointers to it.
// If not, then we need to traverse down the list and be able to identify the last and second to last elements.

pop() {
  const deletedTail = this.tail;

  if (this.head === this.tail) {
    // There is only one node in linked list.
    this.head = null;
    this.tail = null;
    this.length--;
    return deletedTail.value;
  }

  // If there are many nodes in linked list...

  // Rewind to the last node and delete "next" link for the node before the last one.
  let currentNode = this.head;
  while (currentNode.next) {
    if (!currentNode.next.next) {
      currentNode.next = null;
    } else {
      currentNode = currentNode.next;
    }
  }

  this.tail = currentNode;

  this.length--;
  return deletedTail.value;
}


//  if we have linked List think if you can use 2 pointers to travel 
//at different speed one lef the other on the write
//
const evenNum = (head) => {
  let newArr = [];
  let currentHead = head;
  let fast = head;
  let slow = head;
  //  then update the fast and slow in the while loop
  while (currentHead) {
    if (currentHead.val % 2=== 0) {
      newArr.push(currentHead.val)
    }
    currentHead =currentHead.next
  }
  return newArr
}
console.log(evenNum(head))



