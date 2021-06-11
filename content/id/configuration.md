---
title: Pengaturan
description: 'Penjelasan cara mengkonfigurasi badaso'
position: 6
category: 'Getting Started'
version: 1
---

Ketika badaso sudah berhasil terinstal, kamu akan menemukan file konfigurasi pada ```config/badaso.php``` dan ```.env```. Pada file ini nanti kamu akan menemukan banyak opsi untuk mengubah konfigurasi dari instalasi Badaso kamu.

## Backup
Pengaturan backup dapat diubah pada file ```.env```.

### AWS S3
```[.env]
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_URL=
```
- `AWS_ACCESS_KEY_ID`: Isi untuk menggunakan fitur backup ke AWS S3.
- `AWS_SECRET_ACCESS_KEY`: Isi untuk menggunakan fitur backup ke AWS S3.
- `AWS_DEFAULT_REGION`: Region bucket S3 untuk mengunggah file backup.
- `AWS_BUCKET`: Nama bucket S3 untuk mengunggah file backup.
- `AWS_URL`: URL bucket AWS S3.

### Google Drive
```[.env]
GOOGLE_DRIVE_CLIENT_ID=
GOOGLE_DRIVE_CLIENT_SECRET=
GOOGLE_DRIVE_REFRESH_TOKEN=
GOOGLE_DRIVE_FOLDER_ID=
```
- `GOOGLE_DRIVE_CLIENT_ID`: Isi untuk menggunakan fitur backup ke Google Drive.
- `GOOGLE_DRIVE_CLIENT_SECRET`: Isi untuk menggunakan fitur backup ke Google Drive.
- `GOOGLE_DRIVE_REFRESH_TOKEN`: Isi untuk menggunakan fitur backup ke Google Drive.
- `GOOGLE_DRIVE_FOLDER_ID`: Id folder untuk mengunggah file backup ke dalam folder yang ditentukan.

### Dropbox
```[.env]
DROPBOX_AUTH_TOKEN=
```
- `GOOGLE_DRIVE_CLIENT_ID`: Isi untuk menggunakan fitur backup ke Dropbox.

## Hidden Tables

Hidden tables berguna untuk menyembunyikan table pengguna pada halaman CRUD Generator. Hidden tables dapat diatur pada file konfigurasi badaso yaitu `config\badaso-hidden-tables.php`.

```php [config/badaso-hidden-tables.php]
<?php

return [
    // add the table here
];
```

## Watch Tables

Watch tables berguna untuk membuat seeder CRUD_DATA otomatis pada table. Watch tables dapat diatur pada file konfigurasi badaso yaitu `config\badaso-watch-tables.php`.

```php [config/badaso-watch-tables.php]
<?php

return [
    // add the table here
];
```