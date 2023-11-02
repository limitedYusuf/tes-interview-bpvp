function getDayName(dateString) {
   const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
   const date = new Date(dateString);
   const dayIndex = date.getDay();

   return daysOfWeek[dayIndex];
}

const date = '2023-11-02';
const dayName = getDayName(date);
console.log(`Hari pada tanggal ${date} adalah ${dayName}`);
