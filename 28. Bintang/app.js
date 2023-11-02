function createSquareStars(size) {
   for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < size; j++) {
         row += "* ";
      }
      console.log(row);
   }
}

function createRectangleStars(height, width) {
   for (let i = 0; i < height; i++) {
      let row = "";
      for (let j = 0; j < width; j++) {
         row += "* ";
      }
      console.log(row);
   }
}

function createTriangleStars(height) {
   for (let i = 1; i <= height; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
         row += "* ";
      }
      console.log(row);
   }
}

function createInvertedTriangleStars(height) {
   for (let i = height; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
         row += "* ";
      }
      console.log(row);
   }
}

function createPyramidStars(height) {
   for (let i = 1; i <= height; i++) {
      let spaces = " ".repeat(height - i);
      let stars = "*".repeat(2 * i - 1);
      console.log(spaces + stars);
   }
}

function createInvertedPyramidStars(height) {
   for (let i = height; i >= 1; i--) {
      let spaces = " ".repeat(height - i);
      let stars = "*".repeat(2 * i - 1);
      console.log(spaces + stars);
   }
}

function createDiamondStars(height) {
   for (let i = 1; i <= height; i++) {
      let spaces = " ".repeat(height - i);
      let stars = "*".repeat(2 * i - 1);
      console.log(spaces + stars);
   }
   for (let i = height - 1; i >= 1; i--) {
      let spaces = " ".repeat(height - i);
      let stars = "*".repeat(2 * i - 1);
      console.log(spaces + stars);
   }
}

console.log("Persegi Bintang");
createSquareStars(5);

console.log("Persegi Panjang Bintang");
createRectangleStars(4, 6);

console.log("Segitiga Bintang");
createTriangleStars(5);

console.log("Segitiga Bintang Terbalik");
createInvertedTriangleStars(5);

console.log("Piramida Bintang");
createPyramidStars(5);

console.log("Piramida Bintang Terbalik");
createInvertedPyramidStars(5);

console.log("Belah Ketupat Bintang");
createDiamondStars(5);
