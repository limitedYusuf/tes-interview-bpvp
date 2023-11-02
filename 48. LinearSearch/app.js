function linearSearch(arr, target) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
         return i;
      }
   }
   return -1;
}

const array = [10, 5, 7, 20, 15];
const targetValue = 20;
const resultIndex = linearSearch(array, targetValue);

if (resultIndex !== -1) {
   console.log(`Elemen ${targetValue} ditemukan di indeks ${resultIndex}.`);
} else {
   console.log(`Elemen ${targetValue} tidak ditemukan.`);
}
