function countWords(sentence) {
   sentence = sentence.trim();

   const words = sentence.split(/\s+/);

   return words.length;
}

const kalimat = "Halo, nama saya Yusuf BPVP";
const jumlahKata = countWords(kalimat);
console.log(jumlahKata);
