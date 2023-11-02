const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

function calculateParkingFee(hoursParked) {
   const baseRate = 5;
   const hourlyRate = 2;
   const maxHours = 24;

   if (hoursParked <= maxHours) {
      const fee = baseRate + (hoursParked - 1) * hourlyRate;
      return fee;
   } else {
      return "Waktu parkir melebihi maksimum.";
   }
}

rl.question('Masukkan jumlah jam parkir: ', (hours) => {
   const hoursParked = parseFloat(hours);

   if (!isNaN(hoursParked)) {
      const parkingFee = calculateParkingFee(hoursParked);
      console.log(`Tarif parkir untuk ${hoursParked} jam adalah Rp. ${parkingFee}`);
   } else {
      console.log('Masukan tidak valid. Harap masukkan jumlah jam yang valid.');
   }

   rl.close();
});
