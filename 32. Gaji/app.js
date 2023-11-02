function calculateSalary(gajiPokok, tunjangan, potongan) {
   const gajiKotor = gajiPokok + tunjangan;
   const pph = calculateIncomeTax(gajiKotor);
   const gajiBersih = gajiKotor - pph - potongan;

   return gajiBersih;
}

function calculateIncomeTax(gajiKotor) {
   const tarifPPh21 = 0.05;
   const batasPPh21 = 50000000;
   let pajakPPh21 = 0;

   if (gajiKotor <= batasPPh21) {
      pajakPPh21 = gajiKotor * tarifPPh21;
   } else {
      pajakPPh21 = batasPPh21 * tarifPPh21;
      const tarifPPh21Lanjutan = 0.15;
      pajakPPh21 += (gajiKotor - batasPPh21) * tarifPPh21Lanjutan;
   }

   return pajakPPh21;
}

const gajiPokok = 10000000;
const tunjangan = 2000000;
const potongan = 500000;

const gajiBersih = calculateSalary(gajiPokok, tunjangan, potongan);
console.log("Gaji Bersih", gajiBersih);
