==========================Recursion===================

What is Recursion?

recursion is a function that calls itself. Recursion is just another way to create loops.
Anything that can be done iteratively with a for loop or while loop can also be solved with recursion, and vice versa.
The recursive approach seems to be the more simpler and straightforward.


Recursive Approach:

Imagine there is a big box with smaller boxes in it. These smaller boxes can have more smaller boxes in them. Ultimately, there is ONE key hidden away in one of the boxes. Your job is to search and find that key.

Approach:
Look through the box.
If you find a box, go back to Step 1.
If you found the key, then you're done!

The Base Case

 The base case is basically a conditional that tells the function to stop calling itself (the base case is usually just a simple if statement)

 Famous Recursive Problem: 

 Factorial
One simple example of how to practically use recursion is with the factorial algorithm.

Factorial (symbol: "!") means to multiply a integer by every integer before it.

The pattern is like what's shown below:

0! = 1
1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
Example: 5! = 5 * 4 * 3 * 2 * 1 = 120
Iterative Factorial
const factorialize = (num) => {
  let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
This actually requires some thought. We need to run a while loop as long as the solution isn't finished.

Now what if we wanted to do this recursively?

Recursive Factorial
const factorialize = (num) => {
  if (num < 0) 
    return -1;
  else if (num == 0) 
    return 1;
  else {
    return (num * factorialize(num - 1));
  }
}

Famous Recursive Problem #2: Fibonacci
A common, real world example of when to use recursion is the Fibonacci sequence. Here is an iterative solution for finding the nth number of a Fibonacci sequence:

The Fibonacci sequence is made by adding the two previous numbers together:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
If we were to take a short Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21] and fib(4), the result would be equal to 3, so basically we need to return an element with index 4 from our Fibonacci sequence array.

Let's made an iterative solution first, then let's compare it to a recursive solution:

Iterative Fibonacci
const fib = (n) => {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
  return arr[n]
}


Recursive Fibonacci

const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
