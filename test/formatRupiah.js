function rupiahToKata(rupiah) {
  // Ubah string rupiah menjadi angka
  let angkaRupiah = parseInt(rupiah.replace(/[^\d]/g, ""));
  console.log("ini adalah angka rupiah:", angkaRupiah);

  return angkaRupiah;
}

function remakeTeksDenganFormatRupiah(teks) {
  // Gunakan ekspresi reguler yang sesuai dengan format rupiah
  let rupiahFormat = teks.match(/\bRp\d+(?:\.\d{3})*\b/g);

  if (rupiahFormat) {
    rupiahFormat.forEach((rupiah) => {
      console.log("ini format rupiah", rupiahFormat);

      // Panggil fungsi rupiahToKata untuk mengonversi rupiah menjadi kata
      let angkaRupiah = rupiahToKata(rupiah);

      // Ganti setiap kemunculan rupiah dengan kata rupiah
      teks = teks.replace(
        new RegExp(rupiah.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
        `Rp ${angkaRupiah}`
      );
    });
  }

  return teks;
}

// Test case
let teksContoh = "Harga produk adalah Rp1.500.000 dan diskon Rp200.000.";
console.log(remakeTeksDenganFormatRupiah(teksContoh));
