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
  console.log(angka);

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

      // fungsi .trim() =  membersihkan input pengguna atau data string sehingga tidak ada karakter whitespace yang tidak diinginkan yang dapat mempengaruhi pemrosesan atau presentasi data.
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
  } else {
    return angka;
  }
}

// test case
// console.log(angkaToKata(1));
// console.log(angkaToKata(21321));

function remakeTeksDenganFormatAngka(teks) {
  let kataAngka = teks.match( // fungsi ini digunakan untuk mencocokkan string dengan ekspresi reguler tertentu.
    /\b\d+\b/g // ekspresi reguler ini mencari potongan string yang terdiri dari satu atau lebih digit dan diapit oleh batas kata.
    );
  console.log(kataAngka);

  if (kataAngka) {
    kataAngka.forEach((angka) => {
      let kataAngka = angkaToKata(angka);
      teks = teks.replace(new RegExp(`\\b${angka}\\b`, "g"), kataAngka); //menggunakan \b (word boundary) untuk memastikan bahwa angka tersebut berdiri sendiri.

      console.log(teks);
    });
  }
  return teks;
}

// Contoh pemanggilan fungsi
// const teksHasil = remakeTeksDenganFormatAngka("saya pandhu berusia 9 tahun dan sekarang memiliki gaji 100 juta per 2 bulan, / hai 1029 21 32 dan 1 21 122 321");
// console.log(teksHasil);