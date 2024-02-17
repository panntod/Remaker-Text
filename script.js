function remakeTeksDenganFormatTahun(teks) {
  let jamFormat = teks.match(/\b\d{1,2}[:.]\d{2}\b/g);

  if (jamFormat) {
    jamFormat.forEach((jam) => {
      let kataJam = jamToKata(jam);
      teks = teks.replace(new RegExp(jam, "g"), kataJam);
    });
  }

  let tahunAngka = teks.match(/\b\d+\b/g);

  if (tahunAngka) {
    tahunAngka.forEach((tahun) => {
      let kataTahun = angkaToKata(tahun);
      teks = teks.replace(new RegExp(tahun, "g"), kataTahun);
    });
  }
  return teks;
}

function angkaToKata(angka) {
  const kataSatuan = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
  ];
  const kataBelasan = [
    "",
    "sebelas",
    "dua belas",
    "tiga belas",
    "empat belas",
    "lima belas",
    "enam belas",
    "tujuh belas",
    "delapan belas",
    "sembilan belas",
  ];
  const kataPuluhan = [
    "",
    "sepuluh",
    "dua puluh",
    "tiga puluh",
    "empat puluh",
    "lima puluh",
    "enam puluh",
    "tujuh puluh",
    "delapan puluh",
    "sembilan puluh",
  ];
  const kataRatusan = [
    "",
    "seratus",
    "dua ratus",
    "tiga ratus",
    "empat ratus",
    "lima ratus",
    "enam ratus",
    "tujuh ratus",
    "delapan ratus",
    "sembilan ratus",
  ];

  angka = parseInt(angka);

  if (angka === 0) {
    return "nol";
  } else if (angka < 10) {
    return kataSatuan[angka];
  } else if (angka == 10) {
    return kataPuluhan[1];
  } else if (angka < 20) {
    return kataBelasan[angka - 10];
  } else if (angka < 100) {
    let puluhan = Math.floor(angka / 10);
    let satuan = angka % 10;
    return `${kataPuluhan[puluhan]} ${kataSatuan[satuan]}`.trim();
  } else if (angka < 1000) {
    let ratusan = Math.floor(angka / 100);
    let sisaRatusan = angka % 100;
    if (sisaRatusan === 0) {
      return `${kataRatusan[ratusan]}`.trim();
    } else {
      return `${kataRatusan[ratusan]} ${angkaToKata(sisaRatusan)}`.trim();
    }
  } else if (angka < 10000) {
    let ribuan = Math.floor(angka / 1000);
    let sisaRibuan = angka % 1000;
    if (sisaRibuan === 0) {
      return `${kataSatuan[ribuan]} ribu`.trim();
    } else {
      return `${kataSatuan[ribuan]} ribu ${angkaToKata(sisaRibuan)}`.trim();
    }
  } else {
    return angka;
  }
}

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

function prosesTeks(teks) {
  teks = teks
    .replace(/,/g, "")
    .replace(/-/g, " ")
    .replace(/\+/g, " plus")
    .replace(/=/g, " sama dengan")
    .replace(/\;/g, "")
    .replace(/\//g, "")
    .replace(/\#/g, " shard")
    .replace(/\'/g, "")
    .replace(/\"/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/\&/g, " dan")

  return teks;
}

let teksHasilDiproses;
document
  .getElementById("remakerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil teks awal dari textarea
    let teksAwal = document.getElementById("teksAwal").value;

    // Memproses teks dan menampilkan hasil
    let teksHasil = prosesTeks(teksAwal);
    teksHasilDiproses = remakeTeksDenganFormatTahun(teksHasil);
    let teksHasilElement = document.getElementById("teksHasil");

    // Menampilkan hasil pada elemen
    teksHasilElement.textContent = teksHasilDiproses; // Menggunakan textContent untuk menghindari potensi XSS
  });

document.getElementById("copyButton").addEventListener("click", function () {
  if (!teksHasilDiproses) {
    console.error("Tidak ada teks yang dapat disalin.");
    alert("Tidak ada teks yang dapat disalin");
    return;
  }

  navigator.clipboard
    .writeText(teksHasilDiproses)
    .then(() => {
      alert("Teks berhasil disalin!");
    })
    .catch((err) => {
      console.error("Gagal menyalin teks: ", err);
      alert("Gagal menyalin teks");
    });
});
