---
title: Installation
description: 'Explain how to install badaso'
position: 4
category: 'Getting Started'
version: 1
---

## Preparation

Before using Badaso, you need to get licence for `BADASO_LICENSE_KEY`. This key must be included in the laravel project's `.env`. Here are the steps for registering and getting a license on Badaso.

- Register on [Badaso](https://badaso.uatech.co.id/dashboard)

- Your license can be obtained in the License menu (License).

![license](/installation/dashboard-licence.png)

- Save the license for your `.env` later.

```env [.env]
BADASO_LICENSE_KEY={your license}
```

## Installation Step

After getting the license, you can proceed to Badaso installation.

- Badaso is easy to install. [After creating your new Laravel](https://laravel.com/docs/8.x/installation) application you can include the Badaso package with the following command.

<badge>v2.x</badge> For Laravel 8

```bash
composer require uasoft-indonesia/badaso
```

<br />

<badge>v1.x</badge> For Laravel 5, 6, 7

```bash
composer require uasoft-indonesia/badaso:^1.0
```

- Run the following commands to update dependencies in package.json, webpack and publish vendor provider.

```bash
php artisan badaso:setup
```

- Run composer autoload & database migration.

```bash
composer dump-autoload
php artisan migrate
```

- [optional] Symlink the storage folder if not yet

```
php artisan storage:link
```

- [optional] Change filesystem to `public` ([readmore for cloud](https://badaso-docs.uatech.co.id/core-concept/storage)) 

```
FILESYSTEM_DRIVER=public
```

- Run seeders

<badge>v2.x</badge> For Laravel 8
```
php artisan db:seed --class="Database\Seeders\Badaso\BadasoSeeder"
```

<br/>

<badge>v1.x</badge> For Laravel 5, 6, 7
```
php artisan db:seed --class=BadasoSeeder
```

- Create an admin account by typing the following command.

```bash
php artisan badaso:admin your@email.com --create
```

- Run the following command to install all of dependencies.

```bash
npm install
npm run dev
```

- Run your laravel project and access /badaso-dashboard path on your laravel.

```bash
php artisan serve
```