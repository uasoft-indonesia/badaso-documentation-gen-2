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

## Installation step

### On fresh project

- Create project via composer 
```
composer create-project badaso/starter your_project_name
```

### On existing project

- You can install badaso on your existing application easily.

<badge>v2.x</badge> For Laravel 8

```bash
composer require badaso/core
```

<br />

<badge>v1.x</badge> For Laravel 5, 6, 7

```bash
composer require badaso/core:^1.0
```

- Run the following commands to update dependencies in package.json, webpack and publish vendor provider.

```bash
php artisan badaso:setup
```

### Next setup

- Run database migration.

```bash
php artisan migrate
```

- [optional] Symlink the storage folder if not yet

```
php artisan storage:link
```

- For laravel 8 and existing project, change filesystem to `public` ([readmore for cloud](https://badaso-docs.uatech.co.id/core-concept/storage)) 

```
FILESYSTEM_DRIVER=public
```

- Run composer autoload and seeders

```
composer dump-autoload
```

<br/>

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

- Add your license that you got before, to your `.env`

```env [.env]
BADASO_LICENSE_KEY={your license}
```

- Run the following command to install all of dependencies.

```bash
yarn
yarn dev
```

- Run your laravel project and access /badaso-dashboard path on your laravel.

```bash
# via local machine
php artisan serve

# or

# via docker (for badaso/starter or you can set your docker on your existing project)
docker compose build
docker compose up -d
```