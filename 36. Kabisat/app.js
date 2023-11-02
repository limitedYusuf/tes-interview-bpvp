function isLeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
   } else {
      return false;
   }
}

const year = 2023;
if (isLeapYear(year)) {
   console.log(`${year} adalah tahun kabisat.`);
} else {
   console.log(`${year} bukan tahun kabisat.`);
}
