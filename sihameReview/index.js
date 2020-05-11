/* 

1. Traverse a linked list and return an array of only odd valued elements.

Time Complexity = Linear
Space Complexity = Linear

*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);
let h = new Node(8);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

const oddValues = (node) => {
  let arr = [];
  let current = node;
  while (current) {
    if (current.val % 2) {
      arr.push(current.val);
    }
    current = current.next;
  }
  return arr;
};
console.log("Question 1---------------------")
console.log(oddValues(a), "oddValues");

/*
2.  https://leetcode.com/problems/merge-two-sorted-lists/
Time Complexity = O(n*log(n)) linearithmic
Space Complexity = Linear
 Sorting: merge sort, quick sort, any built in sort, also recursive
*/

let arr1 = [3, 4, 6, 9];
let arr2 = [1, 5, 7]
1
const merge = (arr1, arr2) => {
  const output = [];
  while(arr1.length && arr2.length) {
    if(arr1[0] < arr2[0]) {
      output.push(arr1.shift())
    }  else {
      output.push(arr2.shift())
    }
  }
  return [...output, ...arr1,...arr2];
}
console.log("Question 2---------------------")
console.log(merge(arr1,arr2), "Merge two sorted array")


const mergeSort = arr => {
  if(arr.length <= 1) return arr;
  const midIdx = Math.floor(arr.length/2);
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx);  
  const mergeLeft = mergeSort(left);
  const mergeRight = mergeSort(right);
  return merge(mergeLeft, mergeRight);
}
console.log("Question 2---------------------")
let arrMS = [3, 2, 1, 4, 1, 7];
console.log(mergeSort(arrMS), "Merge Sort")
 
/*

3 .Find the product of a stack.
LIFO ------> what is this?
*/

class Stack {
  constructor(stack = []) {
    this.stack = stack;
  }
  pop() {
    return this.stack.pop();
  }
  push(val) {
    this.stack.push(val);
  }
  peek() {
    this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
const findProduct = (stack) => {
  if (stack.isEmpty()) return 0;
  let prod = 1;
  let tempStack = new Stack();
  while (!stack.isEmpty()) {
    let el = stack.pop();
    prod *= el;
    tempStack.push(el);
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return prod;
};
let stack = new Stack([1, 2, 3, 4, 5])
console.log("Question 3---------------------")
console.log(findProduct(stack), "stack product")

/*
4. Find the max number in a queue.
FIFO
*/
class Queue {
  constructor(q = []) {
    this.q = q;
  }
  enqueue(val) { // @ the end
    this.q.push(val);
  }
  dequeue() { // @ the front
    return this.q.shift();
  }
  peek() {
    return this.q[0];
  }
  isEmpty() {
    return this.q.length === 0;
  }
}
const findMax = (queue) => {
  if (queue.isEmpty()) return;
  let max = q.peek();
  while (!queue.isEmpty()) {
    max = Math.max(max, queue.dequeue());
  }
  return max;
};
let q = new Queue([5, -111, 23, 4, 25, 21]);
console.log("Question 4---------------------")
console.log(findMax(q), "Max num in Queue");

/*
5. Write a function that returns the letter that appears the most amount of times in a string.
*/

const countOccurrences = (str) => {
  str = str.toLowerCase();
  let counts = {};
  for (let char of str) {
    counts[char] ? counts[char]++ : (counts[char] = 1);
  }
  return counts;
};
const modeLetter = (str) => {
  let counts = countOccurrences(str);
  let maxChar;
  let maxCharCount = 0;
  for (let key in counts) {
    if (counts[key] > maxCharCount) {
      maxChar = key;
      maxCharCount = counts[key];
    }
  }
  return {maxChar};
};
console.log("Question 5---------------------")
console.log(modeLetter("Hello"), "most occuring string");

/*
6. https://leetcode.com/problems/unique-number-of-occurrences/
*/

const isUnique = str => { 
  let uniqueSet = new Set()
  for (let letter of str) {
    if (uniqueSet.has(letter)) {
      return false
      } else {
      uniqueSet.add(letter)
    }
  }
  return true
}

console.log("Question 6---------------------")
console.log(isUnique("hi"), "is str unique")

//solution 2
const isUniqueArr = arr => {
  let uniqueSet = new Set()
  for (let el of arr) {
    if (uniqueSet.has(el)) {
      return false
      } else {
      uniqueSet.add(el)
    }
  }
  return true
}
console.log("Question 6---------------------")
console.log(isUniqueArr([1, 2, 3, 4, 5, 5]), " is arr array")

/*
7. https://leetcode.com/problems/minimum-depth-of-binary-tree/
*/

const minDepth = (root) => {
  if(!root) return 0;
    let leftDepth =  minDepth(root.left)
     let rightDepth = minDepth(root.right)
  return 1 + Math.min(leftDepth, rightDepth);
}

/*
8. https://leetcode.com/problems/maximum-depth-of-binary-tree
*/

const maxDepth = (root) => {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

/*
9. https://leetcode.com/problems/binary-tree-level-order-traversal/
*/
const levelOrder = root => {
  if (!root) return [];

  const output = [];
  const q = [root];
  
  while(q.length) {
    const lvl = [];
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const currNode = q.shift();
      lvl.push(currNode.val);
      if (currNode.left) q.push(currNode.left);
      if (currNode.right) q.push(currNode.right);
    }
    output.push(lvl);
  }
  return output;
}

/*
10. https://leetcode.com/problems/binary-tree-inorder-traversalrecursive fine
*/
const inorderTraversal = root => {
  let output = []
  if (root !== null) {
    if (root.left !== null) {
      output = output.concat(inorderTraversal(root.left))
    }
    output.push(root.val)
    if (root.right !== null) {
      output = output.concat(inorderTraversal(root.right))
    }
  }
  return output
}
/*
11. https://leetcode.com/problems/binary-search/
*/

const search = (arr, target) => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === target) return i
  }
  return -1
}

console.log("Question 11---------------------")
console.log(search([12, 15, 22, 28, 48, 52, 60], 22), "search for target")
// binary search recursively
const bSearchRec = (arr, target) => {
  if(!arr.length) return -1; 
  let midIdx = Math.floor(arr.length / 2);
  if(arr[midIdx] === target) return midIdx; 
  if(arr[midIdx] > target) {
      return bSearchRec(arr.slice(0, midIdx), target);
  } else {
      const res = bSearchRec(arr.slice(midIdx + 1), target);
      return res === -1 ? -1 : res + midIdx + 1;
  }
}
console.log("Question 11---------------------")
console.log(bSearchRec([11, 12, 22, 44, 55, 58, 66], 68), "binary search recursively")

// binary serach iteratively
const binarySearchIteratively = (array, value) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = (left + right )/2 ;
    if (array[middle] === value) return middle;
    if (array[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
   
  }
  return -1
}
console.log("Question 11---------------------")
console.log(binarySearchIteratively([11, 12, 22, 44, 55, 58, 66], 58), "binary serach iteratively")

/*
12. write a function that takes in an array and returns the sum of all the elements. Do this both iteratively and recursively.
sum of arr - iterative */

const sumOfArr = arr => {
  let sum = 0;
  if(!arr.length) return []
    arr.forEach(el => {
      return sum += el
    })
    return sum
}
console.log("Question 12---------------------")
console.log(sumOfArr([2, 3, 5, 6]), "sum of an array Iteratively");

// sum of arr - recursive

const sumRec = (arr, i = 0) => {
  if(i >= arr.length) return 0;
  return sumRec(arr, i + 1) + arr[i];
}
console.log("Question 12---------------------")
console.log(sumRec([1, 2, 3, 4]), "sum of an array Recursively")



