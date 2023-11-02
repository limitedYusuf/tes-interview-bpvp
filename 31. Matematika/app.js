function calculateFactorial(number) {
   if (number === 0 || number === 1) {
      return 1;
   } else {
      let result = 1;
      for (let i = 2; i <= number; i++) {
         result *= i;
      }
      return result;
   }
}

function calculateFactorialRecursive(number) {
   if (number === 0 || number === 1) {
      return 1;
   } else {
      return number * calculateFactorialRecursive(number - 1);
   }
}

function convertCelsiusToFahrenheit(celsius) {
   return (celsius * 9) / 5 + 32;
}

function convertCelsiusToKelvin(celsius) {
   return celsius + 273.15;
}

function decimalToBinary(decimal) {
   return decimal.toString(2);
}

function binaryToDecimal(binary) {
   return parseInt(binary, 2);
}

function solveQuadraticEquation(a, b, c) {
   const discriminant = b * b - 4 * a * c;
   if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
   } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
   } else {
      return [];
   }
}

function createMultiplicationTable(number, rows) {
   for (let i = 1; i <= rows; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
   }
}

console.log("Menghitung Faktorial", calculateFactorial(5));
console.log("Fungsi Rekursif untuk Menghitung Faktorial", calculateFactorialRecursive(5));
console.log("Konversi Suhu Celcius ke Fahrenheit", convertCelsiusToFahrenheit(25));
console.log("Konversi Suhu Celcius ke Kelvin", convertCelsiusToKelvin(25));
console.log("Konversi Bilangan Desimal ke Biner", decimalToBinary(10));
console.log("Konversi Bilangan Biner ke Desimal", binaryToDecimal("1010"));
console.log("Mencari Akar Persamaan Kuadrat", solveQuadraticEquation(1, -3, 2));
console.log("Membuat Tabel Perkalian Angka");
createMultiplicationTable(7, 5);
