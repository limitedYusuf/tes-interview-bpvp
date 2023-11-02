function createNumberTriangle(height) {
   for (let i = 1; i <= height; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
         row += j + " ";
      }
      console.log(row);
   }
}

function createInvertedNumberTriangle(height) {
   for (let i = height; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
         row += j + " ";
      }
      console.log(row);
   }
}

function createNumberSquare(size) {
   for (let i = 1; i <= size; i++) {
      let row = "";
      for (let j = 1; j <= size; j++) {
         row += j + " ";
      }
      console.log(row);
   }
}

console.log("Segitiga Angka");
createNumberTriangle(5);

console.log("Segitiga Angka Terbalik");
createInvertedNumberTriangle(5);

console.log("Persegi Angka");
createNumberSquare(4);
