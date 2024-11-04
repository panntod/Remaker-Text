import { angkaToKata } from "./number.js";

function jamToKata(jam) {
  let [jamStr, menitStr] = jam.split(/[:.]/);
  let jamAngka = parseInt(jamStr);
  let menitAngka = menitStr ? parseInt(menitStr) : 0; // Menangani kasus tanpa menit

  // Logika untuk mengonversi jam menjadi kata
  let kataJam;
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

// function remake teks formated time
export function remakeTeksDenganFormatJam(teks) {
  let jamFormat = teks.match(/\b\d{1,2}[:.]\d{2}\b/g);

  if (jamFormat) {
    jamFormat.forEach((jam) => {
      let kataJam = jamToKata(jam);
      teks = teks.replace(new RegExp(jam, "g"), kataJam);
    });
  }
  return teks;
}
