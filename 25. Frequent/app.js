function findMostFrequentLetter(word) {
   const letterCount = {};
   let mostFrequentLetter = "";
   let maxCount = 0;

   for (const letter of word) {
      if (letterCount[letter]) {
         letterCount[letter]++;
      } else {
         letterCount[letter] = 1;
      }

      if (letterCount[letter] > maxCount) {
         mostFrequentLetter = letter;
         maxCount = letterCount[letter];
      }
   }

   return mostFrequentLetter;
}

const word = "hello ronaldo wibu";
const mostFrequent = findMostFrequentLetter(word);
console.log(mostFrequent);
