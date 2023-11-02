const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

function calculate(num1, operator, num2) {
   switch (operator) {
      case "+":
         return num1 + num2;
      case "-":
         return num1 - num2;
      case "*":
         return num1 * num2;
      case "/":
         if (num2 !== 0) {
            return num1 / num2;
         } else {
            return "Tidak dapat membagi dengan 0";
         }
      default:
         return "Operator tidak valid";
   }
}

rl.question('Masukkan angka pertama: ', (num1) => {
   rl.question('Masukkan operator (+, -, *, /): ', (operator) => {
      rl.question('Masukkan angka kedua: ', (num2) => {
         const result = calculate(Number(num1), operator, Number(num2));
         console.log(`Hasil perhitungan: ${num1} ${operator} ${num2} = ${result}`);
         rl.close();
      });
   });
});
