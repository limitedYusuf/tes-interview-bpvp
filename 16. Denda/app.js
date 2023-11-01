function calculateFine(daysLate, bookType) {
   let fineRate = 0;
   if (bookType === "pelajaran") {
      fineRate = 2;
   } else if (bookType === "novel") {
      fineRate = 5;
   } else if (bookType === "skripsi") {
      fineRate = 10;
   }
   const fine = daysLate * fineRate;
   return fine;
}

const daysLate = 15;
const bookType = "pelajaran";
const fineAmount = calculateFine(daysLate, bookType);
console.log(fineAmount);
