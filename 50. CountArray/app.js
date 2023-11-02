function addArrays(arr1, arr2) {
   const result = [];
   const maxLength = Math.max(arr1.length, arr2.length);
   let carry = 0;

   for (let i = 0; i < maxLength; i++) {
      const num1 = i < arr1.length ? arr1[i] : 0;
      const num2 = i < arr2.length ? arr2[i] : 0;

      const sum = num1 + num2 + carry;
      carry = Math.floor(sum / 10);
      result.push(sum % 10);
   }

   if (carry > 0) {
      result.push(carry);
   }

   return result;
}

// Contoh penggunaan:
const array1 = [2, 4, 3];
const array2 = [5, 6, 7];

const sumArray = addArrays(array1, array2);
console.log("Hasil Penjumlahan:", sumArray);
