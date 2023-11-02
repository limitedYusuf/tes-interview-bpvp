function convertKilometerToMeter(kilometers) {
   return kilometers * 1000;
}

const kilometers = 5;
const meters = convertKilometerToMeter(kilometers);
console.log(`${kilometers} kilometer sama dengan ${meters} meter.`);
