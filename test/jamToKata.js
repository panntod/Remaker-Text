const angkaToKata = require('./angkaToKata.js')

function jamToKata(jam) {
  let [jamStr, menitStr] = jam.split(/[:.]/); //digunakan untuk memecah string menjadi array berdasarkan suatu pemisah. Dalam hal ini, pemisahnya adalah ekspresi regular /[:.]/
  
  // menyiapkan data dengan merubah nya menjadi int
  let jamAngka = parseInt(jamStr);
  let menitAngka = menitStr ? parseInt(menitStr) : 0; 

  // mengecek apakah sudah sesuai
  console.log(jamAngka, menitAngka);

  // Logika untuk mengonversi jam menjadi kata
  let kataJam;

  // jika jam lebih dari 12
  if (jamAngka > 12) {
    kataJam = angkaToKata(jamAngka - 12);
  } else {
    kataJam = angkaToKata(jamAngka);
  }

  // Logika untuk mengonversi menit
  let kataMenit = menitAngka > 0 ? angkaToKata(menitAngka) : "nol";

  // Menggabungkan dan mengembalikan hasil
  if (kataMenit === "nol") {
    return kataJam;
  }

  return `${kataJam} lebih ${kataMenit}`;
}

// contoh test case
// console.log(jamToKata('2.'));