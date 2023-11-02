function isPalindrome(str) {
   str = str.toLowerCase().replace(/\s/g, "");

   const reversedStr = str.split("").reverse().join("");
   return str === reversedStr;
}

const word = "level";
const isPalindrom = isPalindrome(word);
console.log(isPalindrom ? "palindrom" : "bukan palindrom");
