---
title: Upgrading
description: 'Explain how to upgrade badaso version'
position: 5
category: 'Getting Started'
version: 1
---

## Updating Existing Badaso

<alert>
Before updating the Badaso version, you should first backup the project. 
</alert>

- Update badaso to latest version with command below.

```bash
composer update uasoft-indonesia/badaso
```

- Run command below for setup project to latest badaso version configuration.

```bash
php artisan badaso:setup --force
```

<alert>
--force is used to overwrite previously published ones. Don't use --force if you only want to publish unpublished files.
</alert>

- Migrate database if available.

```bash
php artisan migrate
```

- Reseed badaso

```bash
php artisan db:seed --class=BadasoSeeder
```

- Install new Javascript packages if available

```bash
npm install
```
