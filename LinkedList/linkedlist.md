What's a Linked List?

Storing Data Sequentially
A Linked List is the most fundamental data structure you can make. You should always think how do you store a collection of data? 

Arrays

Arrays in most low level languages is a very primitive collection. In languages like C++ you need to provide a location in memory for every variable. Each time you want to store an item in memory, you ask the computer for some space, and it gives you an address where you can store your item.

Array in Memory

So as you can see, you can't store any more data after you reach 3 elements. This isn't very versatile. We need to be able to GROW and SHRINK our collection.

That is where Linked Lists come in.

Linked Lists
Now what if we wanted to add elements to our list and we are not sure how many elements there will be. At one point there could be none and at another point there could be 1,000.

This is where the 'Linked' in Linked Lists comes in. We can coordinate a sequential list by POINTING from one space in memory to the next.

Lists in Memory

This chain of memory is the foundation of the simplest abstract data structure.

12 -> 1 -> 3 -> null
Linked List

Nodes
A node is the building block of a Linked List. Each 'element' is a node. A node is an Abstract Class that does two things:

1. Store information
2. Hold reference to the next Node
By doing so, you can chain nodes one after another and form a Linked Data Structure.

class Node {

  constructor(value) {
    // We want to initialize a Node with a value
    this.value = value;
    // An independent node shouldn't point to anything by default
    this.next = null;
  }

}
Now we have this object that we can initialize easily and pass in a value to store.

Let's try chaining them:

let node1 = new Node(1);
// 1 -> null
let node2 = new Node(2);
// 2 -> null
let node3 = new Node(3);
// 3 -> null
Now we have three nodes, but they aren't connected or chained together. How do we fix this?

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2; // 1 -> 2 -> null

node2.next = node3; // 1 -> 2 -> 3 -> null
Cool, now that we manually chained the Nodes together, we finally have a Linked List right? Eh, kind of. This is actually pretty tedious to do. We have to manually create and attach the Nodes in the order we want. This is not the proper way to create an Abstract Data Structure. We only want to focus on the high level and have the Linked List manage it's own Nodes.

Linked List Implementation
Container Class
The whole purpose of an Abstract Data Structure is to provide us with an interface.

We want our 'Linked List' class to be able to do the following:

Hold a reference to the beginning or 'Head' of the list
Be able to add onto the list new Nodes
Keep track of how many elements/nodes we have
Traverse and find elements/nodes in the list
Let's begin with defining our container class:

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

}
Essentially we want the container class to contain three properties: head, tail and length.

Head: This points to the first Node in the list at all times. Once we are connected to the first Node, you can find every subsequent Node.

Tail: This points to the last Node at all times. Allows us to push new Nodes to the end of the list in O(1) time.

Length: This will be a simple Number value to keep track of the number of Nodes in the list. Think of this as an accountant.

Linked List Methods
push(value) : Add new element to the beginning of the list. While pushing everything down.

append(value) : Add new element to the end of the list. Keeping original order intact.

print() : Prints all the elements in the list sequentially.

nodeAt(index) : Returns value at the passed index.

pop() : Removes the last element in the list and returns it.

There are many more methods we could potentially integrate, but these 5 should give us a fully functional Linked List and teach us the ropes!

push(value)
Adding a value at the front of the list is known as a push operation. This is also known as a head-first insertion. Because we have a Head pointer at all times this is extremely simple!

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
append(value)
The next operation we’ll look at is append. This is meant to add a value to the end of the list. This is known as tail-end insertion. This is also pretty easy and straight forward because we have a Tail pointer!

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
print()
Let's say we want to print the list like the following:

-> 1 -> 2 -> 3 -> null
What is our approach? We need to actually go through each Node one by one and print right? Correct. This is called traversal. Traversing through a linked list and other linked data structures is very important.

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
nodeAt(index)
Lets say we want the following indexes:

// -> Apple -> Orange -> Lemon -> null

fruits.nodeAt(0); // Apple
fruits.nodeAt(2); // Lemon
How would we go on about doing this? We need to traverse through the list like the previous example, but this time we stop at a counter.

nodeAt(index) {
  let counter = 0;
  let pointer = this.head;

  while(counter < index && pointer /* returns null if index > counter */) {
    pointer = pointer.next;
    counter++;
  }

  return pointer.value;
}
This is fairly similiar to the previous traversal example. In this case we start with the 'Head', which happens to be 'Zero' index, then work our way down the nodes as long as the counter isn't matching the index we are searching for.

Finally, when we do arrive at the index, we return the Node to the user. Where they can easily access the value or any associated pointers.

pop()
Finally, we have pop(). We want to be able to remove the last element of the list and get back that Node once the operation is done.

How would we approach this?

Check if the head is the tail. Why? That means there is only one Node in the list and we have both of our Head and Tail pointers to it.
If not, then we need to traverse down the list and be able to identify the last and second to last elements.
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
So, as you can see being able to properly traverse down a linked data structure is crucial. You will use this same traversal techniques for more advanced data structures.