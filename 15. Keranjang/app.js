const keranjang1 = "kosong";
const keranjang2 = 10;
const keranjang3 = 5;

let buahDiRumah = 0;
if (keranjang1 === "kosong") {
  buahDiRumah = keranjang2 + keranjang3;
} else if (keranjang2 === "kosong") {
  buahDiRumah = keranjang1 + keranjang3;
} else {
  buahDiRumah = keranjang1 + keranjang2;
}

console.log(buahDiRumah);
