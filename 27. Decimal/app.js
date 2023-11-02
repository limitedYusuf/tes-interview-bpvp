function decimalToBinary(decimal) {
   if (decimal === 0) {
      return "0";
   } else if (decimal === 1) {
      return "1";
   } else {
      const quotient = Math.floor(decimal / 2);
      const remainder = decimal % 2;
      return decimalToBinary(quotient) + remainder.toString();
   }
}

const decimalNumber = 222;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber);
