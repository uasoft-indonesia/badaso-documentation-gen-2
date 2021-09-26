---
title: Instalasi
description: 'Penjelasan tentang instalasi badaso'
position: 3
category: 'Getting Started'
version: 1
---

## Pada aplikasi baru

- Buat project laravel yang sudah terinstall badaso menggunakan composer

```
composer create-project badaso/starter your_project_name
```

## Pada aplikasi yang sudah ada

- Kamu dapat menambahkan badaso pada aplikasi laravel kamu dengan perintah berikut ini.

<badge>v2.x</badge> For Laravel 8

```bash
composer require badaso/core
```

<br />

<badge>v1.x</badge> For Laravel 5, 6, 7

```bash
composer require badaso/core:^1.0
```

- Jalankan perintah berikut untuk memperbarui dependensi di package.json, webpack, dan publish vendor provider.

```bash
php artisan badaso:setup
```

## Setup selanjutnya (untuk aplikasi baru atau sudah ada)

- Jalankan migrasi database.
```
php artisan migrate
```

-  [optional] Symlink folder storage jika belum

```
php artisan storage:link
```

- Untuk Laravel 8 dan proyek yang sudah ada, ubah filesystem driver menjadi `public` ([lihat disini untuk cloud](https://badaso-docs.uatech.co.id/core-concept/storage)) 

```
FILESYSTEM_DRIVER=public
```

- Jalankan composer autoload dan seeder


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

- Install javascript depedency
```
yarn
yarn dev
``` 

- Jalankan project laravel dan akses `/badaso-dashboard` di browser untuk mengakses dashboard.

```bash
# melalui local machine
php artisan serve
```