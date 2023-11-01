function determineRating(number) {
   if (number <= 60) {
      return "Kurang";
   } else if (number <= 70) {
      return "Cukup";
   } else if (number <= 80) {
      return "Baik";
   } else {
      return "Luar Biasa";
   }
}

for (let i = 0; i < 5; i++) {
   const randomNumber = Math.floor(Math.random() * 100) + 1;
   const rating = determineRating(randomNumber);
   console.log(`${randomNumber} - ${rating}`);
}
