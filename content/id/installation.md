---
title: Instalasi
description: 'Penjelasan tentang instalasi badaso'
position: 3
category: 'Getting Started'
version: 1
---

## Persiapan

Sebelum menggunakan badaso, Silahkan registrasi pada [badaso](https://badaso.uatech.co.id/) untuk mendapatkan `BADASO_LICENSE_KEY`. Key ini harus disertakan pada `.env` project laravel.
Berikut langkah-langkah untuk mendaftar dan mendapatkan lisensi di badaso dashboard.

- Pada halaman auth, klik "create an account" dan masukkan data Anda pada bidang yang diberikan.

![register](/installation/dashboard-register.png)

- Masukkan token validasi Anda yang dikirim ke email Anda.

![verify](/installation/dashboard-verify.png)

- Setelah berhasil verifikasi, anda akan diarahkan ke halaman dashboard.

- Lisensi anda dapat diperoleh pada menu Lisensi(License)

![license](/installation/dashboard-licence.png)

- Tambahkan lisensi pada `.env`

```env [.env]
BADASO_LICENSE_KEY=YOUR_LICENSE_KEY
```

## Langkah Instalasi

Setelah mendapatkan lisensi, anda dapat melanjutkan ke instalasi badaso.

- Menginstal badaso sangatlah mudah. Setelah laravel terinstal, kamu dapat menambahkan badaso dengan perintah berikut ini.

<badge>v2.x</badge> For Laravel 8

```bash
composer require uasoft-indonesia/badaso
```

<br />

<badge>v1.x</badge> For Laravel 5, 6, 7

```bash
composer require uasoft-indonesia/badaso:^1.0
```

- Jalankan perintah berikut untuk memperbarui dependensi di package.json, webpack, dan publish vendor provider.

```bash
php artisan badaso:setup
```

- Jalankan perintah berikut ini secara berurutan.
```
composer dump-autoload
php artisan migrate
php artisan db:seed --class=BadasoSeeder
```

- Buat akun admin dengan cara mengetikan perintah berikut ini.
```
php artisan badaso:admin your@email.com --create
```

- Jalankan perintah berikut ini untuk menginstall semua dependensi
```
npm install
``` 

- Jalankan project laravel dan akses /badaso-dashboard di browser untuk mengakses dashboard.