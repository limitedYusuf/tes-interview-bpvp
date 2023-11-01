const grossToPiece = 144;
const dozenToPiece = 12;
const totalPlates = 6 * grossToPiece;
const borrowedByTio = 4 * dozenToPiece;
const borrowedByDavid = 2 * grossToPiece;
const remainingPlates = totalPlates - borrowedByTio - borrowedByDavid;
console.log(remainingPlates);
