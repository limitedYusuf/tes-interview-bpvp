function generatePattern(n) {
   for (let i = 1; i <= n; i++) {
      let line = '';
      for (let j = 1; j <= n; j++) {
         if (j <= i) {
            line += j;
         } else {
            line += '**';
         }
      }
      console.log(line);
   }
}

console.log(generatePattern(5));
console.log(generatePattern(4));
