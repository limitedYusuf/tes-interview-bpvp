const numbers = [12, 45, 67, 23, 9, 54, 32];

// metode 1
const minNumber = Math.min(...numbers);

console.log("Nilai terkecil dalam array:", minNumber);

// metode 2
let minNumber2 = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNumber2) {
    minNumber2 = numbers[i];
  }
}

console.log("Nilai terkecil dalam array:", minNumber2);