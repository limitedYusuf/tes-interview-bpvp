function determineWeirdness(N) {
   if (N % 2 !== 0) {
      console.log("weird");
   } else {
      if (N >= 2 && N <= 5) {
         console.log("not weird");
      } else if (N >= 6 && N <= 20) {
         console.log("weird");
      } else {
         console.log("not weird");
      }
   }
}

determineWeirdness(7);
determineWeirdness(4);
determineWeirdness(18);
