function calculateSquareArea(side) {
   return side * side;
}

function calculateSquarePerimeter(side) {
   return 4 * side;
}

function calculateRectangleArea(length, width) {
   return length * width;
}

function calculateRectanglePerimeter(length, width) {
   return 2 * (length + width);
}

function calculateTriangleArea(base, height) {
   return 0.5 * base * height;
}

function calculateTrianglePerimeter(side1, side2, side3) {
   return side1 + side2 + side3;
}

function calculateCircleArea(radius) {
   return Math.PI * radius * radius;
}

function calculateCircleCircumference(radius) {
   return 2 * Math.PI * radius;
}

function calculateRhombusArea(diagonal1, diagonal2) {
   return (diagonal1 * diagonal2) / 2;
}

function calculateTrapezoidArea(base1, base2, height) {
   return 0.5 * (base1 + base2) * height;
}

function calculateCubeSurfaceArea(side) {
   return 6 * side * side;
}

function calculateCubeVolume(side) {
   return side * side * side;
}

function calculateRectangularBoxSurfaceArea(length, width, height) {
   return 2 * (length * width + length * height + width * height);
}

function calculateRectangularBoxVolume(length, width, height) {
   return length * width * height;
}

function calculateCylinderSurfaceArea(radius, height) {
   return 2 * Math.PI * radius * (radius + height);
}

function calculateCylinderVolume(radius, height) {
   return Math.PI * radius * radius * height;
}

function calculateSphereSurfaceArea(radius) {
   return 4 * Math.PI * radius * radius;
}

function calculateSphereVolume(radius) {
   return (4 / 3) * Math.PI * radius * radius * radius;
}

function calculateConeSurfaceArea(radius, slantHeight) {
   const baseArea = Math.PI * radius * radius;
   const lateralArea = Math.PI * radius * slantHeight;
   return baseArea + lateralArea;
}

function calculateConeVolume(radius, height) {
   return (1 / 3) * Math.PI * radius * radius * height;
}

console.log("Luas Persegi", calculateSquareArea(5));
console.log("Keliling Persegi", calculateSquarePerimeter(5));
console.log("Luas Persegi Panjang", calculateRectangleArea(4, 6));
console.log("Keliling Persegi Panjang", calculateRectanglePerimeter(4, 6));
console.log("Luas Segitiga", calculateTriangleArea(5, 8));
console.log("Keliling Segitiga", calculateTrianglePerimeter(5, 4, 7));
console.log("Luas Lingkaran", calculateCircleArea(3));
console.log("Keliling Lingkaran", calculateCircleCircumference(3));
console.log("Luas Belah Ketupat", calculateRhombusArea(6, 8));
console.log("Luas Trapesium", calculateTrapezoidArea(5, 7, 4));
console.log("Luas Permukaan Kubus", calculateCubeSurfaceArea(4));
console.log("Volume Kubus", calculateCubeVolume(4));
console.log("Luas Permukaan Balok", calculateRectangularBoxSurfaceArea(6, 8, 10));
console.log("Volume Balok", calculateRectangularBoxVolume(6, 8, 10));
console.log("Luas Permukaan Tabung", calculateCylinderSurfaceArea(3, 5));
console.log("Volume Tabung", calculateCylinderVolume(3, 5));
console.log("Luas Permukaan Bola", calculateSphereSurfaceArea(4));
console.log("Volume Bola", calculateSphereVolume(4));
console.log("Luas Permukaan Kerucut", calculateConeSurfaceArea(5, 7));
console.log("Volume Kerucut", calculateConeVolume(5, 7));
