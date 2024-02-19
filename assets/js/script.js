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
  const kataRibuan = [
    "",
    "seribu",
    "dua ribu",
    "tiga ribu",
    "empat ribu",
    "lima ribu",
    "enam ribu",
    "tujuh ribu",
    "delapan ribu",
    "sembilan ribu",
    "sepuluh ribu",
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

    if (satuan === 0) {
      return `${kataPuluhan[puluhan]}`.trim();
    } else {
      return `${kataPuluhan[puluhan]} ${kataSatuan[satuan]}`.trim();
    }
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
      return `${kataRibuan[ribuan]}`.trim();
    } else {
      return `${kataRibuan[ribuan]} ${angkaToKata(sisaRibuan)}`.trim();
    }
  } else if (angka < 100000) {
    let puluhanRibuan = Math.floor(angka / 10000);
    let sisaPuluhanRibuan = angka % 10000;
    if (sisaPuluhanRibuan === 0) {
      return `${kataPuluhan[puluhanRibuan]} ribu`.trim();
    } else {
      return `${kataPuluhan[puluhanRibuan]} ribu ${angkaToKata(sisaPuluhanRibuan)}`.trim();
    }
  } else if (angka < 1000000) {
    let ratusanRibuan = Math.floor(angka / 100000);
    let sisaRatusanRibuan = angka % 100000;
    if (sisaRatusanRibuan === 0) {
      return `${kataRatusan[ratusanRibuan]} ribu`.trim();
    } else {
      return `${kataRatusan[ratusanRibuan]} ribu ${angkaToKata(sisaRatusanRibuan)}`.trim();
    }
  }  else if (angka < 10000000) {
    let ratusanRibuan = Math.floor(angka / 1000000);
    let sisaRatusanRibuan = angka % 1000000;
    if (sisaRatusanRibuan === 0) {
      return `${kataSatuan[ratusanRibuan]} juta`.trim();
    } else {
      return `${kataSatuan[ratusanRibuan]} juta ${angkaToKata(sisaRatusanRibuan)}`.trim();
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
    .replace(/-/g, " ")
    .replace(/,/g, "")
    .replace(/\;/g, "")
    .replace(/\//g, "")
    .replace(/=/g, " sama dengan")
    .replace(/\#/g, " sharp")
    .replace(/\%/g, " persen")
    .replace(/\+/g, " plus")
    .replace(/\&/g, " dan")
    .replace(/\'/g, "")
    .replace(/\"/g, "")
    .replace(/\:/g, "")
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/\?/g, "")
    .replace(/\!/g, "");

  return teks;
}

// function remake teks formated number
function remakeTeksDenganFormatAngka(teks) {
  let kataAngka = teks.match(/\b\d+\b/g);

  if (kataAngka) {
    kataAngka.forEach((angka) => {
      let kataAngka = angkaToKata(angka);
      teks = teks.replace(new RegExp(`\\b${angka}\\b`, "g"), kataAngka); 
    });
  }
  return teks;
}

// function remake teks formated time
function remakeTeksDenganFormatJam(teks){
  let jamFormat = teks.match(/\b\d{1,2}[:.]\d{2}\b/g);

  if (jamFormat) {
    jamFormat.forEach((jam) => {
      let kataJam = jamToKata(jam);
      teks = teks.replace(new RegExp(jam, "g"), kataJam);
    });
  }
  return teks
}

// declarate variable global scope
let finnalTeks;

//**  event handler **//
document
  .getElementById("remakerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil teks awal dari textarea
    let teksAwal = document.getElementById("teksAwal").value;
    let teksHasilElement = document.getElementById("teksHasil");

    // Memproses teks dan menampilkan hasil
    let teksHasilProsesJam = remakeTeksDenganFormatJam(teksAwal);
    let teksHasilProsesAngka = remakeTeksDenganFormatAngka(teksHasilProsesJam);
    finnalTeks = prosesTeks(teksHasilProsesAngka);

    // Menampilkan hasil pada elemen
    teksHasilElement.textContent = finnalTeks; // Menggunakan textContent untuk menghindari potensi XSS
  });

document.getElementById("copyButton").addEventListener("click", function () {
  if (!finnalTeks) {
    console.error("Tidak ada teks yang dapat disalin.");
    alert("Tidak ada teks yang dapat disalin");
    return;
  }

  navigator.clipboard
    .writeText(finnalTeks)
    .then(() => {
      alert("Teks berhasil disalin!");
    })
    .catch((err) => {
      console.error("Gagal menyalin teks: ", err);
      alert("Gagal menyalin teks");
    });
});
