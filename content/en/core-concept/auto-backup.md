---
title: Auto Backup
description: 'Badaso auto backup section'
position: 43
category: 'Core Concept'
version: 1
---

Badaso provides automatic backup features. You can setup env to backup your file or database to your storage.

To use Auto Backup, there is some config needs to setup.

- Setup ENV
```
#fill with one of all,database,files, backup will not run if BACKUP_TARGET empty
BACKUP_TARGET=
#fill with many of s3,google,dropbox, backup will not run if BACKUP_DISK empty
BACKUP_DISK=
```

- Add the following line to the ```config/database.php```
```php
...,
'connections' => [
	'mysql' => [
		'driver'    => 'mysql'
		...,
		'dump' => [
		   'dump_binary_path' => env('DUMP_BINARY_PATH', 'C:\xampp\mysql\bin'),
		   'use_single_transaction',
		   'timeout' => 60 * 5, // 5 minute timeout
		]  
  ],
...,
```

- Add the following line to the ```config/filesystem.php```
```php
'disks' => [

  ...,

  's3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => env('AWS_DEFAULT_REGION'),
    'bucket' => env('AWS_BUCKET'),
    'url' => env('AWS_URL'),
  ],

  'google' => [
    'driver' => 'google',
    'clientId' => env('GOOGLE_DRIVE_CLIENT_ID'),
    'clientSecret' => env('GOOGLE_DRIVE_CLIENT_SECRET'),
    'refreshToken' => env('GOOGLE_DRIVE_REFRESH_TOKEN'),
    'folderId' => env('GOOGLE_DRIVE_FOLDER_ID'),
  ],

  'dropbox' => [
    'driver' => 'dropbox',
    'authorization_token' => env('DROPBOX_AUTH_TOKEN'),
  ],

],
```

- Run Backup command
```
php artisan badaso:backup
```