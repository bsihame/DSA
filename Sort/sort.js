// Bubble Sort(n^2)

console.log("Bubble Sort");

const bubbleSort = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false
      }
    }
  }
  return arr
}
let arr = [3, 2, 1, 4, 1, 7];
console.log(bubbleSort(arr)) // => [ 1, 1, 2, 3, 4, 7 ]

console.log("Insertion Sort")

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--
      // console.log(arr[j + 1], arr[j ])
    }
    arr[j+1] = temp
  }
  return arr
}
console.log(insertionSort([4, 5, 10, 43, 14, 0]));

console.log("Quick Sort")
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const left = [];
  const right = [];
  const equalToPivot = [];
  arr.forEach(el => {
    if (el < pivot) {
      left.push(el)
    } else if (el > pivot) {
      right.push(el)
    } else {
      equalToPivot.push(pivot)
    }
  })
  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);
  return [...leftSorted, ...equalToPivot, ...rightSorted];
}

console.log(quickSort(arr));

console.log("Merge")
