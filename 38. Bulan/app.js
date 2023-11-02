function getMonthName(monthNumber) {
   const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
   ];

   if (monthNumber >= 1 && monthNumber <= 12) {
      return months[monthNumber - 1];
   } else {
      return 'Bulan tidak valid';
   }
}

const monthNumber = 11;
const monthName = getMonthName(monthNumber);
console.log(`Bulan nomor ${monthNumber} adalah ${monthName}`);
