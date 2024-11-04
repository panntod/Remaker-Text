export function angkaToKata(angka) {
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

  if (angka === 0) return "nol";
  if (angka < 10) return kataSatuan[angka];
  if (angka === 10) return kataPuluhan[1];
  if (angka < 20) return kataBelasan[angka - 10];
  if (angka < 100)
    return `${kataPuluhan[Math.floor(angka / 10)]} ${
      kataSatuan[angka % 10]
    }`.trim();
  if (angka < 1000)
    return `${kataRatusan[Math.floor(angka / 100)]} ${angkaToKata(
      angka % 100
    )}`.trim();
  if (angka < 10000)
    return `${kataRibuan[Math.floor(angka / 1000)]} ${angkaToKata(
      angka % 1000
    )}`.trim();
  if (angka < 20000)
    return `${
      kataBelasan[Math.floor((angka - 10000) / 1000)]
    } ribu ${angkaToKata(angka % 1000)}`.trim();
  if (angka < 100000)
    return `${kataPuluhan[Math.floor(angka / 10000)]} ribu ${angkaToKata(
      angka % 10000
    )}`.trim();
  if (angka < 1000000)
    return `${kataRatusan[Math.floor(angka / 100000)]} ribu ${angkaToKata(
      angka % 100000
    )}`.trim();
  if (angka < 10000000)
    return `${kataSatuan[Math.floor(angka / 1000000)]} juta ${angkaToKata(
      angka % 1000000
    )}`.trim();

  return angka;
}

export function remakeTeksDenganFormatAngka(teks) {
  let kataAngka = teks.match(/\b\d+\b/g);

  if (kataAngka) {
    kataAngka.forEach((angka) => {
      let kataAngka = angkaToKata(angka);
      teks = teks.replace(new RegExp(`\\b${angka}\\b`, "g"), kataAngka);
    });
  }
  return teks;
}
