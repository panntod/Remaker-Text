# Rekamer Teks 🚀

## Deskripsi

Dalam repositori ini, terdapat bot yang dirancang untuk menyusun kembali teks yang diinputkan agar dapat lolos sensor dalam `data collection for indonesia speech recognition and acoustic / language modeling`. Bot ini mempercepat proses pembuatan teks dengan beberapa fitur tambahan, menggunakan metode CSR (Client Side Rendering). Artinya, bot ini tidak terhubung ke dalam database manapun, sehingga kecepatan konversi sesuai dengan kecepatan internet pengguna. Bot juga menerapkan beberapa logika dasar untuk mengubah teks. Saat ini, masih dalam tahap pengembangan untuk mencapai fitur maksimal. Anda dapat mengunjunginya di [`Remaker Text`](https://panntod.github.io/Remaker-Text)


## Fitur

- Menconvert angka-to-kata 📝
- Menconvert jam-to-kata 🕒
- Mereplace symbol ♻️
- Find and Replace All (incoming) 🔍🔄 
- Menconvert rupiah-to-kata 💸
- Penggunaan RegExp 🧩

## Version 2.0.1

| Feature | Deskripsi | Status | 
| ---| ---|--- |
| Merubah Angka | Mampu merubah angka mulai dari 1 - 1000000, penambahan boundary supaya menconvert per array yang muncul, untuk menghindari kesalahan convert   | `Active` | 
| Merubah Jam | Mampi mendefinisikan jam sesuai dengan pemisah yaitu `/[:.]/`, lalu merubah nya menjadi kata  | `Active` | 
| Mereplace Simbol| Mampu mendefinisikan symbol yang muncul, lalu merubah nya sesuai dengan kebutuhan. Untuk code selengkap nya bisa dilihat pada `documentation` | `Active` |
| Copy Clipboard | Mampu mengcopy teks yang sudah di proses ke papan clipboard dengan menge-click icon clipboar , untuk memudahkan pengguna | `Active` |
| Merubah Rupiah | Mampu mendefinisikan Rupiah dengan format `Rp / (.{3}d) ` atau tiga angka dibelakang titik | `Active` |
| Mencari | Mampu mencari kata yang sesuai dengan inputan | `Non Active` |
| Merubah | Mampu merubah kata yang dicari dengan kata sesuai dengan inputan | `Non Active` |

