function countVowels(inputString) {
   const vowels = inputString.match(/[aeiou]/gi);

   if (vowels === null) {
      return 0;
   } else {
      return vowels.length;
   }
}

const text = "Halo, ini adalah contoh kalimat dengan beberapa huruf vokal.";
const vowelCount = countVowels(text);
console.log(`Jumlah huruf vokal: ${vowelCount}`);
