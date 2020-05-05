console.log("Binary Search");

// Only work when the data sorted.
// time complexity of log(n) 

// step1 : find middle index => use Math.floor, length of the array and divide to fine the middle
// step2: check the element at middle index
// step3: check the element at middle index by searching from right or left
// step4: add the base case or the failing case

const search = (arr, target) => {
      for(let i = 0; i < arr.length; i++) {
              if(arr[i] === target) return i; 
          }
          return -1;
      }
      let arr = [11, 12, 22, 44, 55, 58, 66];
      console.log(search(arr, 58))

const binarySearch = (arr2, value) => {
  let midArr = Math.floor(arr2.length / 2)
  if (arr2.length <= 0 || value > arr2[arr2.length-1]) return -1;
  if (value === arr2[midArr]) return midArr;
  if (value < arr2[midArr]) return binarySearch(left, value)
  if (value> arr2[midArr]) return binarySearch(right, value)
}
let arr2 = [11, 12, 22, 44, 55, 58, 66];
console.log(binarySearch(arr2, 44));

console.log("Binary Search Iteratively");
const binarySearchIteratively = (array, value) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor(array.length - 1);
    if (array[middle] === value) return middle;
    if (array[middle] < value) {
      return left = middle + 1;
    } else {
     
      return right = middle - 1;
    }
  }
  return -1
}
console.log(binarySearchIteratively([11, 12, 22, 44, 55, 58, 66], 66))


const bSearchRec = (arr, target) => {
  if (!arr.length) return -1;
  let midIndx = Math.floor(arr.length / 2);
  if (arr[midIndx] === target) return midIndx;
  if (arr[midIndx] < target) {
    return bSearchRec(arr.slice(0, midIndx), target)
  } else {
    return bSearchRec(arr.slice(midIndx + 1), target)
  }
}
console.log(bSearchRec([11, 12, 22, 44, 55, 58, 66], 12))

// const bSearchRec = (arr, target) => {
//   if(!arr.length) return -1; 
//   let midIdx = Math.floor(arr.length / 2);
//   if(arr[midIdx] === target) return midIdx; 
//   if(arr[midIdx] > target) {
//       return bSearchRec(arr.slice(0, midIdx), target);
//   } else {
//       const res = bSearchRec(arr.slice(midIdx + 1), target);
//       return res === -1 ? -1 : res + midIdx + 1;
//   }
// }

