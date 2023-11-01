function generateMultiplesOfTwo(limit) {
   const multiplesOfTwo = [];
   for (let i = 2; i <= limit; i += 2) {
      multiplesOfTwo.push(i);
   }
   return multiplesOfTwo;
}

const multiplesOfTwo = generateMultiplesOfTwo(100);
console.log(multiplesOfTwo);

function generateMultiplesOfThree(limit) {
   const multiplesOfThree = [];
   for (let i = 3; i <= limit; i += 3) {
      multiplesOfThree.push(i);
   }
   return multiplesOfThree;
}

const multiplesOfThree = generateMultiplesOfThree(100);
console.log(multiplesOfThree);

function generateMultiplesOfFour(limit) {
   const multiplesOfFour = [];
   for (let i = 4; i <= limit; i += 4) {
      multiplesOfFour.push(i);
   }
   return multiplesOfFour;
}

const multiplesOfFour = generateMultiplesOfFour(100);
console.log(multiplesOfFour);

function generateMultiplesOfFive(limit) {
   const multiplesOfFive = [];
   for (let i = 5; i <= limit; i += 5) {
      multiplesOfFive.push(i);
   }
   return multiplesOfFive;
}

const multiplesOfFive = generateMultiplesOfFive(100);
console.log(multiplesOfFive);
