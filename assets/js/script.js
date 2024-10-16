import { remakeTeksDenganFormatJam } from "./clock.js";
import { remakeTeksDenganFormatAngka } from "./number.js";

function prosesTeks(teks) {
  teks = teks
    .replace(/-/g, " ")
    .replace(/,/g, "")
    .replace(/\;/g, "")
    .replace(/\//g, " ")
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
