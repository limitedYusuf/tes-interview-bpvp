function convertNumberWithDots(inputNumber) {
   const cleanedNumber = inputNumber.replace(/\./g, "");
   const resultArray = [];

   for (let i = 0; i < cleanedNumber.length; i++) {
      const digit = parseInt(cleanedNumber[i]);
      const powerOfTen = cleanedNumber.length - 1 - i;
      const result = digit * Math.pow(10, powerOfTen);
      resultArray.push(result);
   }

   return resultArray;
}

const inputNumber = "1.225.441";
const convertedNumbers = convertNumberWithDots(inputNumber);
console.log(convertedNumbers);
