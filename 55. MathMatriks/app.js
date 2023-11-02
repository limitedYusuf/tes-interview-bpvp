const matrixA = [
   [1, 2],
   [3, 4]
];

const matrixB = [
   [5, 6],
   [7, 8]
];

function addMatrices(matrixA, matrixB) {
   const result = [];
   for (let i = 0; i < matrixA.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrixA[i].length; j++) {
         result[i][j] = matrixA[i][j] + matrixB[i][j];
      }
   }
   return result;
}

function multiplyMatrices(matrixA, matrixB) {
   const result = [];
   for (let i = 0; i < matrixA.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrixB[0].length; j++) {
         result[i][j] = 0;
         for (let k = 0; k < matrixA[0].length; k++) {
            result[i][j] += matrixA[i][k] * matrixB[k][j];
         }
      }
   }
   return result;
}

function subtractMatrices(matrixA, matrixB) {
   const result = [];
   for (let i = 0; i < matrixA.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrixA[i].length; j++) {
         result[i][j] = matrixA[i][j] - matrixB[i][j];
      }
   }
   return result;
}

function divideMatrices(matrixA, matrixB) {
   const result = [];
   for (let i = 0; i < matrixA.length; i++) {
      result[i] = [];
      for (let j = 0; j < matrixA[i].length; j++) {
         result[i][j] = matrixA[i][j] / matrixB[i][j];
      }
   }
   return result;
}

const additionResult = addMatrices(matrixA, matrixB);
console.log("Hasil Penambahan:", additionResult);

const multiplicationResult = multiplyMatrices(matrixA, matrixB);
console.log("Hasil Perkalian:", multiplicationResult);

const subtractionResult = subtractMatrices(matrixA, matrixB);
console.log("Hasil Pengurangan:", subtractionResult);

const divisionResult = divideMatrices(matrixA, matrixB);
console.log("Hasil Pembagian:", divisionResult);
