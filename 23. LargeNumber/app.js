function findLargestNumber(arr) {
   if (arr.length === 0) {
      return null;
   }

   let largest = arr[0];

   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
         largest = arr[i];
      }
   }

   return largest;
}

const array = [1, 5, 3, 7, 2];
const largestNumber = findLargestNumber(array);
console.log(largestNumber);
