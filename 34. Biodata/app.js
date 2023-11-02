const readline = require('readline');
const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

const students = [];

function displayMenu() {
   console.log('Menu');
   console.log('1. Tampilkan Daftar Mahasiswa');
   console.log('2. Tambah Data Mahasiswa');
   console.log('3. Keluar');
}

function showStudentList() {
   console.log('Daftar Mahasiswa:');
   for (let i = 0; i < students.length; i++) {
      const student = students[i];
      console.log(`Mahasiswa ${i + 1}:`);
      console.log(`Nama: ${student.name}`);
      console.log(`NIM: ${student.nim}`);
      console.log(`Jurusan: ${student.major}`);
      console.log('----------------------');
   }
   displayMenu();
   promptUser();
}

function addStudent() {
   rl.question('Masukkan Nama Mahasiswa ', (name) => {
      rl.question('Masukkan NIM Mahasiswa ', (nim) => {
         rl.question('Masukkan Jurusan Mahasiswa ', (major) => {
            students.push({ name, nim, major });
            console.log('Data mahasiswa telah ditambahkan.');
            displayMenu();
            promptUser();
         });
      });
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
            showStudentList();
            break;
         case '2':
            addStudent();
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

console.log('Selamat datang di Yusuf Biodata!');
displayMenu();
promptUser();
