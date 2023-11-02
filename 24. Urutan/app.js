function sortNumbers(arr, ascending = true) {
   if (ascending) {
      return arr.slice().sort((a, b) => a - b);
   } else {
      return arr.slice().sort((a, b) => b - a);
   }
}

const array = [3, 1, 5, 2, 4];
const sortedArrayAscending = sortNumbers(array, true);
const sortedArrayDescending = sortNumbers(array, false);

console.log(sortedArrayAscending);
console.log(sortedArrayDescending);
