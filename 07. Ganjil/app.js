function generateOddNumbers(limit) {
   const oddNumbers = [];
   for (let i = 1; i <= limit; i += 2) {
      oddNumbers.push(i);
   }
   return oddNumbers;
}

const oddNumbers = generateOddNumbers(100);
console.log(oddNumbers);
