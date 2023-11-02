const numbers = [12, 45, 67, 23, 9, 54, 32];

// metode 1
const maxNumber = Math.max(...numbers);

console.log("Nilai terbesar dalam array:", maxNumber);

// metode 2
let maxNumber2 = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber2) {
    maxNumber2 = numbers[i];
  }
}

console.log("Nilai terbesar dalam array:", maxNumber2);