Binary Search

Binary search accomplishes the same task with O(log n).

What is Binary Search & why use it?
Let's say you had a phone book and you wanted to find someone's name. The person is "Jehhar".

What do we know?

The phone book is alphabetically ordered by first name
The name starts with the letter "J"
If we follow a Linear Search algorithm we would start at the beginning of the book from "A" and keep turning the pages until we reach "J". But more naturally you will probably start searching from the middle of the book because "J" is closer to the middle.

Binary search accomplishes the same task with O(log n).

Binary Search Conditions
There are two conditions that need to be met before binary search may be used:

** The collection must be able to access index in constant time: O(1)
** The collection must be sorted

Binary Search Logic
--------------------


Step 1: Find the middle index
The first step is to find the middle index of the collection

Step 2: Check the element at the middle index
Check the element stored at the middle index. If it matches the value you’re looking for, you return the index. Otherwise, you’ll continue to Step 3

Step 3: Recursively call Binary Search
Is the number you are looking for GREATER or LESS than the number you're looking for?

If the value you’re searching for is less than the middle value, you search the left subset. If it is greater than the middle value, you search the right subset.

Each step effectively removes half of the comparisons you would otherwise need to perform.

Binary Search Implementation

Step 1: Find the middle index
const binarySearch = (arr, value) => {
  // Get Middle Index of the array
  const middle = Math.floor(arr.length/2);
}

Step 2: Check the element at the middle index
const binarySearch = (arr, value) => {
  const middle = Math.floor(arr.length/2);

  // We want to compare the middle value with with the value we are looking for
  if (value === arr[middle]) {
    return middle;
  }
}

Step 3: Check the element at the middle index
const binarySearch = (arr, value) => {
  const middle = Math.floor(arr.length/2);

  // Divide the array into left and right halves
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  if (value === arr[middle]) {
    return middle;
  }

  // If the value is smaller than middle value
  // Search Left
  else if (value < arr[mid]) {
    return binarySearch(left, value);
  }

  // If the value is greater than middle value
  // Search Right
  else {
    // We need to add middle to keep track
    // of how many elements offset from the left
    return middle + binarySearch(right, value);
  }
}

Step 4: Base Case or Fail Case
const binarySearch = (arr, value) => {
  console.log("Searching: "+arr);
  // Base case
  // If the array ends up with no elements
  // Or if the last element is smaller than the value 
  if (arr.length <= 0 || value > arr[arr.length - 1]) {
    return -1;
  }

  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  if (value === arr[middle]) {
    return middle;
  }
  else if (value < arr[middle]) {
    return binarySearch(left, value);
  }
  else {
    return middle + binarySearch(right, value);
  }
}