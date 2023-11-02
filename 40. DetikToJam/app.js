function convertSecondsToMinutesAndHours(seconds) {
   const hours = Math.floor(seconds / 3600);
   const remainingSeconds = seconds % 3600;
   const minutes = Math.floor(remainingSeconds / 60);
   const remainingSecondsAfterMinutes = remainingSeconds % 60;

   return {
      hours,
      minutes,
      seconds: remainingSecondsAfterMinutes
   };
}

const totalSeconds = 7325;
const time = convertSecondsToMinutesAndHours(totalSeconds);
console.log(`Hasil konversi: ${time.hours} jam, ${time.minutes} menit, ${time.seconds} detik.`);
