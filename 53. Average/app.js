const numbers = [12, 45, 67, 23, 9, 54, 32];

// metode 1
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;
console.log("Nilai rata-rata array:", average);

// metode 2
const sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average2 = sum2 / numbers.length;

console.log("Nilai rata-rata array:", average2);