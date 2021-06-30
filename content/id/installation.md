---
title: Instalasi
description: 'Penjelasan tentang instalasi badaso'
position: 3
category: 'Getting Started'
version: 1
---

## Persiapan

Sebelum menggunakan badaso, kamu membutuhkan `BADASO_LICENSE_KEY`. Key ini harus disertakan pada `.env` project laravel.

Berikut langkah-langkah untuk mendaftar dan mendapatkan lisensi di badaso dashboard.

- Mendaftar di [Badaso](https://badaso.uatech.co.id/dashboard)

- Lisensi anda dapat diperoleh pada menu Lisensi (License)

![license](/installation/dashboard-licence.png)

- Simpan license yang didapatkan untuk ditambahkan pada `.env` nanti.

## Langkah Instalasi

Setelah mendapatkan lisensi, anda dapat melanjutkan ke instalasi badaso.

- Menginstal badaso sangatlah mudah. Setelah [laravel terinstal](https://laravel.com/docs/8.x/installation), kamu dapat menambahkan badaso dengan perintah berikut ini.

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

- Jalankan composer autoload & migrasi database.
```
composer dump-autoload
php artisan migrate
```

-  [optional] Symlink folder storage jika belum

```
php artisan storage:link
```

- [optional] Ubah filesystem driver menjadi `public` ([lihat disini untuk cloud](https://badaso-docs.uatech.co.id/core-concept/storage)) 

```
FILESYSTEM_DRIVER=public
```

- Jalankan perintah seeder

<badge>v2.x</badge> Untuk Laravel 8
```
php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```
<br/>

<badge>v1.x</badge> Untuk Laravel 5, 6, 7
```
php artisan db:seed --class=BadasoSeeder
```

- Buat akun admin dengan cara mengetikan perintah berikut ini.
```
php artisan badaso:admin your@email.com --create
```

- Tambahkan license yang telah didapatkan tadi pada `.env`

```env [.env]
BADASO_LICENSE_KEY={your license}
```

- Jalankan perintah berikut ini untuk menginstall semua dependensi
```
npm install
npm run dev
``` 

- Jalankan project laravel dan akses /badaso-dashboard di browser untuk mengakses dashboard.

```
php artisan serve
```