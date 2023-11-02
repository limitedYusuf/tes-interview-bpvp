const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const menuItems = [
   { name: "Nasi Goreng", price: 15000 },
   { name: "Mie Ayam", price: 12000 },
   { name: "Sate Ayam", price: 18000 },
   { name: "Es Teh", price: 5000 },
   { name: "Es Jeruk", price: 6000 },
];

const receipt = [];

function displayMenu() {
   console.log("Menu Makanan:");
   menuItems.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - Rp. ${item.price}`);
   });
}

function calculateTotal() {
   let total = 0;
   receipt.forEach((item) => {
      total += item.price;
   });
   return total;
}

function printReceipt() {
   console.log("\nStruk Belanja:");
   receipt.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - Rp. ${item.price}`);
   });
   const total = calculateTotal();
   console.log(`Total Belanja: Rp. ${total}`);
}

function startShopping() {
   displayMenu();
   rl.question('Pilih nomor menu yang ingin Anda pesan (atau ketik "selesai" untuk menyelesaikan pesanan): ', (choice) => {
      if (choice.toLowerCase() === "selesai") {
         printReceipt();
         rl.close();
      } else {
         const menuIndex = parseInt(choice) - 1;
         if (!isNaN(menuIndex) && menuIndex >= 0 && menuIndex < menuItems.length) {
            const selectedItem = menuItems[menuIndex];
            receipt.push(selectedItem);
            console.log(`Anda telah menambahkan ${selectedItem.name} ke keranjang.`);
            startShopping();
         } else {
            console.log('Pilihan tidak valid. Silakan pilih nomor menu yang benar.');
            startShopping();
         }
      }
   });
}

console.log("Selamat datang di Aplikasi Kasir Sederhana!");
startShopping();
