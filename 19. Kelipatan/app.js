function generateMultiplesOfN(limit, n) {
   const multiples = [];
   for (let i = n; i <= limit; i += n) {
      multiples.push(i);
   }
   return multiples;
}

const multiplesOfTwo = generateMultiplesOfN(100, 2);
const multiplesOfThree = generateMultiplesOfN(100, 3);
const multiplesOfFour = generateMultiplesOfN(100, 4);
const multiplesOfFive = generateMultiplesOfN(100, 5);

console.log(multiplesOfTwo);
console.log(multiplesOfThree);
console.log(multiplesOfFour);
console.log(multiplesOfFive);
