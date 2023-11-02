const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const products = [
   { name: 'Produk A', price: 1000 },
   { name: 'Produk B', price: 2000 },
   { name: 'Produk C', price: 3000 },
   // Tambahkan produk lainnya
];

function displayMenu() {
   console.log('Menu');
   console.log('1. Lihat Daftar Produk');
   console.log('2. Hitung Diskon');
   console.log('3. Keluar');
}

function showProductList() {
   console.log('Daftar Produk');
   for (let i = 0; i < products.length; i++) {
      const product = products[i];
      console.log(`${i + 1}. ${product.name} - Harga: ${product.price}`);
   }
   displayMenu();
   promptUser();
}

function calculateDiscount() {
   showProductList();
   rl.question('Pilih produk (1/2/3) ', (choice) => {
      const selectedProduct = products[parseInt(choice) - 1];
      if (selectedProduct) {
         rl.question('Masukkan persentase diskon (0-100): ', (discountPercentage) => {
            const discount = (discountPercentage / 100) * selectedProduct.price;
            const discountedPrice = selectedProduct.price - discount;
            console.log(`Harga setelah diskon: ${discountedPrice}`);
            displayMenu();
            promptUser();
         });
      } else {
         console.log('Produk tidak valid.');
         calculateDiscount();
      }
   });
}

function exitApp() {
   console.log('Terima kasih, program selesai.');
   rl.close();
}

function promptUser() {
   rl.question('Pilih menu (1/2/3) ', (choice) => {
      switch (choice) {
         case '1':
            showProductList();
            break;
         case '2':
            calculateDiscount();
            break;
         case '3':
            exitApp();
            break;
         default:
            console.log('Pilihan tidak valid.');
            displayMenu();
            promptUser();
      }
   });
}

console.log('Selamat datang di Yusuf Potongan Harga!');
displayMenu();
promptUser();
