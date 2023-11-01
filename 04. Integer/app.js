function get_products(arr) {
   const n = arr.length;
   const products = new Array(n);

   let productLeft = 1;
   for (let i = 0; i < n; i++) {
      products[i] = productLeft;
      productLeft *= arr[i];
   }

   let productRight = 1;
   for (let i = n - 1; i >= 0; i--) {
      products[i] *= productRight;
      productRight *= arr[i];
   }

   return products;
}

const inputArray = [1, 7, 3, 4];
const result = get_products(inputArray);
console.log(result);
