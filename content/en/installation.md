---
title: Installation
description: 'Explain how to install badaso'
position: 4
category: 'Getting Started'
version: 1
---

## Preparation

Before using Badaso, please register on [Badaso](https://badaso.uatech.co.id/dashboard) to get `BADASO_LICENSE_KEY`. This key must be included in the laravel project's `.env`. Here are the steps for registering and getting a license on Badaso Dashboard.

- On auth page, click "create an account" and enter your data on the given field.

![register](/installation/dashboard-register.png)

- Enter your validation token that send to your email.

![verify](/installation/dashboard-verify.png)

- After successful verification, you will be directed to the dashboard page.

- Your license can be obtained in the License menu (License).

![license](/installation/dashboard-licence.png)

- Add license to your `.env`.

```env [.env]
BADASO_LICENSE_KEY=YOUR_LICENSE_KEY
```

## Installation Step

After getting the license, you can proceed to Badaso installation.

- Badaso is easy to install. After creating your new Laravel application you can include the Badaso package with the following command.

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

- Run the following commands in sequence.

```bash
composer dump-autoload
php artisan migrate
php artisan db:seed --class=BadasoSeeder
```

- Create an admin account by typing the following command.

```bash
php artisan badaso:admin your@email.com --create
```

- Run the following command to install all of dependencies.

```bash
npm install
```

- Run your laravel project and access /badaso-dashboard path on your laravel.