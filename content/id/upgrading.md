---
title: Perbarui
description: 'Jelaskan cara memperbarui versi badaso'
position: 5
category: 'Getting Started'
version: 1
---

## Memperbarui Badaso

<alert>
Sebelum mengupdate versi badaso, sebaiknya backup/commit project terlebih dahulu.
</alert>

- Perbarui badaso ke versi terbaru dengan perintah di bawah ini

```
composer update uasoft-indonesia/badaso
```

- Jalankan perintah di bawah ini untuk mengatur proyek ke konfigurasi versi badaso terbaru

```
php artisan badaso:setup --force
```

<alert>
--force digunakan untuk menimpa yang file konfigurasi sebelumnya. Jangan gunakan --force jika Anda hanya ingin memublikasikan file yang tidak dipublikasikan.
</alert>

- Migrasikan database jika tersedia

```
php artisan migrate
```

- Ulangi seed badaso

```
php artisan db:seed --class=BadasoSeeder
```

- Instal node package baru jika tersedia

```
npm install
```