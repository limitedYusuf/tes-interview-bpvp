function generateFibonacci(limit) {
   const fibonacci = [1, 1];
   let nextFib = 2;
   while (nextFib <= limit) {
      fibonacci.push(nextFib);
      const len = fibonacci.length;
      nextFib = fibonacci[len - 1] + fibonacci[len - 2];
   }
   return fibonacci;
}

const fibonacciNumbers = generateFibonacci(100);
console.log(fibonacciNumbers);
