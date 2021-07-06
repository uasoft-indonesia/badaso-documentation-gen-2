---
title: Analytics
description: 'Bagian badaso analytics'
position: 46
category: 'Core Concept'
version: 1
---

Analytics berguna untuk mendapatkan informasi pengunjung seperti jumlah pengunjung di suatu halaman, rata-rata lama pengunjung mengakses situs, dll. Untuk menggunakan analytics di badaso, Anda harus membuat akun [Google Analytics](https://analytics.google.com/analytics/web) terlebih dahulu. Setelah itu, dapatkan View ID dan Tracking ID dari analytics Anda.

Masukkan View ID dan Tracking ID dari analytics Anda ke variabel .env `ANALYTICS_VIEW_ID` dan` MIX_ANALYTICS_TRACKING_ID`.

Untuk mengambil informasi pengunjung situs, Anda harus membuat akun layanan untuk analytics Anda dan mengunduh file service-account.json. Setelah itu, Anda dapat menyimpannya di direktori penyimpanan seperti di bawah ini.

```
📦 Your Project
┣ 📂 storage
┃ ┣ 📂 app
┃ ┃ ┣ 📂 analytics
┃ ┃ ┃ ┗ 📜 service-account-crendetial.js   /** Simpan file .json disini. **/
```

<alert>
Anda dapat menyesuaikan direktori penyimpanan kredensial akun layanan di file konfigurasi <code>analytics.php</code>.
</alert>

<alert>
Analytics hanya akan mendeteksi pengunjung dari mengakses generated CRUD saja.
</alert>

Setelah itu Anda dapat melakukan query menggunakan class yang disediakan oleh spatie/laravel-analytics. Jika Anda ingin tahu lebih banyak tentang query tersebut, kunjungi [spatie/laravel-analytics](https://github.com/spatie/laravel-analytics).
