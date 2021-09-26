---
title: Installation
description: 'Explain how to install badaso'
position: 4
category: 'Getting Started'
version: 1
---

## On fresh project

- Create project via composer 
```
composer create-project badaso/starter your_project_name
```

## On existing project

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

## Next setup (for both fresh project or existing project)

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

- Run badaso required seeder


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
yarn
yarn dev
```

- Run your laravel project and access `/badaso-dashboard` path on your laravel.

```bash
php artisan serve
```