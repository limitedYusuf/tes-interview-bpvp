const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menuOptions = {
  1: 'Lihat Profil',
  2: 'Ubah Password',
  3: 'Keluar'
};

function displayMenu() {
  console.log('Menu:');
  for (const option in menuOptions) {
    console.log(`${option}. ${menuOptions[option]}`);
  }
}

function showProfile() {
  console.log('Ini adalah profil mu.');
  displayMenu();
  promptUser();
}

function changePassword() {
  console.log('Anda dapat mengubah kata sandi di sini.');
  displayMenu();
  promptUser();
}

function exitApp() {
  console.log('Terima kasih, program selesai.');
  rl.close();
}

function promptUser() {
  rl.question('Pilih menu (1/2/3): ', (choice) => {
    switch (choice) {
      case '1':
        showProfile();
        break;
      case '2':
        changePassword();
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

console.log('Selamat datang di Yusuf Menu Berulang!');
displayMenu();
promptUser();
