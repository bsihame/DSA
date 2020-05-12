Stacks

Goals
Understand what's a Stack
LIFO
Stack Methods
Understand how to implement a stack
Lesson
What's a Stack?
Stacks are very common. Here are some common examples of things you would stack in real life:

Dishes
Pancakes
Books
Dollar Bills
Just like the way you represent stacks in the physical world, we do the same in computer science.

Stack of Dishes

There are two fundemental concepts with a stack collection:

When you add a new element it goes on top of the stack.
When you remove an element you're only allowed to remove the one on top.
This is a very famous concept called LIFO.

LIFO
Stack of Dishes

LIFO stands for 'Last In First Out'.

In stacks only two operations are allowed: push the item into the stack, and pop the item out of the stack. A stack is a limited access data structure; elements can only be added and removed from the stack only at the top.

Just like in the physical world, if you tried to pull out a dish from the middle it would all come crashing.

Stack Use Cases
Here are some real world applications of stacks:

Back & Forward button on Web Browsers.
Reversing a word. You push a word letter by letter, then pop letters from the stack.
Undo mechanism. Example, undo in a text editor.
Syntax checking for compilers. Example, checking for parentheses and braces.
Memory allocation uses stacks at the architectural level. Memory for local variables is also managed using a stack.
Stack Methods
push(value) : Add new element to the top of the stack.
pop() : Remove element from top of the stack and return it.
peek() : Returns the top element of the stack without removing it.
isEmpty() : Returns a boolean indicating if the stack is empty or not.
Stack Implementation
There are two ways of implementing Stacks. One is the hard traditional way and the other is the easier way using Arrays. They both fundementally tackle the same problems, so for this lesson we will follow the Array route.

Container Class
class Stack {

  constructor() {
    this.arr = [];
  }

}
This is pretty straight forward. We don't want to initialize a stack with any value. The only important member property of the class is an Array to hold our elements.

push(value)
What do we want to accomplish? Adding a new element to the END of the stack.

push(value) {
  this.arr.push(value);
}
pop()
Now we want to remove and return the last element, which is also very simple using Arrays.

pop() {
  return this.arr.pop();
}
peek()
We want to just be able to access the element on top of the stack.

peek() {
  // Get Last Index based on length
  const lastIndex = this.arr.length - 1;

  // Return value
  return this.arr[lastIndex];
}
isEmpty()
Check if the stack is empty.

isEmpty() {
  // Check if array length is zero
  return this.arr.length === 0;
}
Putting it all Together
class Stack {

  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  peek() {
    // Get Last Index based on length
    const lastIndex = this.arr.length - 1;

    // Return value
    return this.arr[lastIndex];
  }

  isEmpty() {
    // Check if array length is zero
    return this.arr.length === 0;
  }

}