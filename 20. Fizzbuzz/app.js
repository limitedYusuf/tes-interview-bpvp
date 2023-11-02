function advancedFizzBuzz(n) {
   const result = [];
   for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         result.push("FizzBuzz");
      } else if (i % 3 === 0) {
         result.push("Fizz");
      } else if (i % 5 === 0) {
         result.push("Buzz");
      } else {
         result.push(i);
      }
   }

   const groupedResult = result.reduce((acc, value) => {
      if (!acc[value]) {
         acc[value] = [];
      }
      acc[value].push(value);
      return acc;
   }, {});

   return Object.values(groupedResult);
}

const fizzBuzzResult = advancedFizzBuzz(100);
console.log(fizzBuzzResult);
