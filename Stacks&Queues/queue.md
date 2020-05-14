Queues
Goals
Understand what's a Queue
FIFO
Queue Methods
Understand how to implement a queue
Lesson
What's a Queue?
Queues are very common just like stacks. Here are some common examples of things you would queue in real life:

Waiting on line at the DMV
Managing calls at a help desk ("Your call will be answered in the order it was received")
Ordering at a fast food restaurant
Line Cartoon

There are two fundemental concepts with a queue collection:

When you add a new element it goes to the end of the queue.
When you remove an element you're only allowed to remove the first element in the queue.
This is the opposite of stacks, and the concept is FIFO.

FIFO
FIFO stands for 'First In First Out'.

Makes sense right? If you're first in line, you should be the first one to be served.

Enqueue is the term that describes to enter the queue.
Dequeue means to leave the queue.
Just like stacks, in queues you're only allowed to access the next element in line to be dequeued.

Line Cartoon

Queue Use Cases
Here are some real world applications of queues:

Queue of people at any service such as ticketing.
Queue of air planes waiting to take off in the air port.
Queue of data from a server to a client.
Vehicles on the road moving in one direction.
Queue Methods
enqueue(value) : Add new element to the end of the queue.
dequeue() : Removes element from beginning of the queue and returns it.
peek() : Returns the element from beginning of the queue without removing it.
isEmpty() : Returns a boolean indicating if the queue is empty or not.
Queue Implementation
Just like the stack there are several ways to implement the queue. For the sake of teaching the basic concepts we will go with the Array approach. But here are more ways to implement:

Array Implementation
Linked List Implementation
Double Stack Implementation
Container Class
class Queue {

  constructor() {
    this.arr = [];
  }

}
The only important member property of the class is an Array to hold our elements.

enqueue(value)
What do we want to accomplish? Adding a new element to the END of the queue.

enqueue(value) {
  this.arr.push(value);
}
dequeue()
Now we want to remove and return the first element, which is very simple using Arrays.

dequeue() {
  return this.arr.shift();
}
peek()
We want to just be able to access the element in the beginning of the queue.

peek() {
  // Get First Index based on length
  const firstIndex = 0;

  // Return value
  return this.arr[firstIndex];
}
isEmpty()
Check if the queue is empty.

isEmpty() {
  // Check if array length is zero
  return this.arr.length === 0;
}
Putting it all Together
class Queue {

  constructor() {
    this.arr = [];
  }

  enqueue(value) {
    this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    // Get First Index based on length
    const firstIndex = 0;

    // Return value
    return this.arr[firstIndex];
  }

  isEmpty() {
    // Check if array length is zero
    return this.arr.length === 0;
  }

}