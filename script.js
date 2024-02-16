function remakeTeksDenganFormatTahun(teks) {
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
  } else if (angka < 20) {
    return kataBelasan[angka - 10];
  } else if (angka < 100) {
    let satuan = angka % 10;
    let puluhan = Math.floor(angka / 10);
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
    return "angka terlalu besar";
  }
}

function prosesTeks(teks) {
  teks = teks
    .replace(/,/g, "")
    .replace(/-/g, " ")
    .replace(/\+/g, " plus")
    .replace(/=/g, " sama dengan")
    .replace(/\*/, " bintang")
    .replace(/;/g, "")
    .replace(/\//g, "")
    .replace(/\#/g, ' shard')

  return teks;
}
document
  .getElementById("remakerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Mengambil teks awal dari textarea
    let teksAwal = document.getElementById("teksAwal").value;

    // Memproses teks dan menampilkan hasil
    let teksHasil = prosesTeks(teksAwal);
    let teksHasilDiproses = remakeTeksDenganFormatTahun(teksHasil);
    let teksHasilElement = document.getElementById("teksHasil");

    // Menampilkan hasil pada elemen
    teksHasilElement.innerHTML = teksHasilDiproses;
  });