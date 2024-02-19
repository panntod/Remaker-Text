# Rekamer Teks 🚀

## Deskripsi

Dalam repositori ini, terdapat bot yang dirancang untuk menyusun kembali teks yang diinputkan agar dapat lolos sensor dalam `data collection for indonesia speech recognition and acoustic / language modeling`. Bot ini mempercepat proses pembuatan teks dengan beberapa fitur tambahan, menggunakan metode CSR (Client Side Rendering). Artinya, bot ini tidak terhubung ke dalam database manapun, sehingga kecepatan konversi sesuai dengan kecepatan internet pengguna. Bot juga menerapkan beberapa logika dasar untuk mengubah teks. Saat ini, masih dalam tahap pengembangan untuk mencapai fitur maksimal. Anda dapat mengunjunginya di [`Remaker Text`](https://panntod.github.io/Remaker-Text)


## Fitur

- Menconvert angka-to-kata 📝
- Menconvert jam-to-kata 🕒
- Menconvert rupiah-to-kata 💸
- Mereplace symbol ♻️
- Penggunaan RegExp 🧩
- Find and Replace All 🔍🔄 

## Version 2.1.1

| Feature | Deskripsi | Status | 
| ---| ---|--- |
| Merubah Angka | Mampu merubah angka mulai dari 1 - 1000000, penambahan boundary supaya menconvert per array yang muncul, untuk menghindari kesalahan convert   | `Active` | 
| Merubah Jam | Mampi mendefinisikan jam sesuai dengan pemisah yaitu `/[:.]/`, lalu merubah nya menjadi kata  | `Active` | 
| Mereplace Simbol| Mampu mendefinisikan symbol yang muncul, lalu merubah nya sesuai dengan kebutuhan. Untuk code selengkap nya bisa dilihat pada `documentation` | `Active` |
| Copy Clipboard | Mampu mengcopy teks yang sudah di proses ke papan clipboard dengan menge-click icon clipboar , untuk memudahkan pengguna | `Active` |
| Merubah Rupiah | Mampu mendefinisikan Rupiah dengan format `Rp\d+(?:\.\d{3})*` atau tiga angka dibelakang titik | `Deactive` |
| Mencari | Mampu mencari kata yang sesuai dengan inputan | `Active` |
| Merubah | Mampu merubah kata yang dicari dengan kata sesuai dengan inputan | `Active` |


## Documentation  

### Symbol
```js
function prosesTeks(teks) {
  teks = teks
    .replace(/-/g, " ")                 // Merubah - menjadi spasi
    .replace(/,/g, "")                  // Menghapus tanda koma
    .replace(/\;/g, "")                 // Menghapus semi-colon
    .replace(/\//g, "")                 // Menghapus garis miring
    .replace(/=/g, " sama dengan")      // Mengganti = menjadi sama dengan
    .replace(/\#/g, " sharp")           // Mengganti # menjadi sharp
    .replace(/\%/g, " persen")          // Mengganti % menjadi percent
    .replace(/\+/g, " plus")            // Mengganti + menjadi Plus
    .replace(/\&/g, " dan")             // Mengganti $ menjadi dan
    .replace(/\'/g, "")                 // Menghapus petik satu
    .replace(/\"/g, "")                 // Menghapus petik dua
    .replace(/\:/g, "")                 // Menghapus titik dua
    .replace(/\(/g, "")                 // Menghapus buka kurung
    .replace(/\)/g, "")                 // Menghapus tutup kurung
    .replace(/\?/g, "")                 // Menghapus tanda tanya
    .replace(/\!/g, "");                // menghapus tanda seru

  return teks;
}
```
### Jam
```js
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
```