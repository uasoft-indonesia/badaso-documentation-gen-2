---
title: Overriding Controller
description: 'Detail tentang overriding controller'
position: 2
category: 'Customization'
version: 1
---

Setiap CRUD yang di-generate melalui CRUD generator akan menggunakan controller yang sama. Ada kalanya controller ini butuh penyesuaian, seperti penambahan logika yang tidak disediakan oleh Badaso.

Untuk membuat controller baru dan menggunakannya pada CRUD yang telah di-generate, ada beberapa langkah yang perlu dilakukan, yaitu:

- Membuat controller laravel seperti biasa.
```
php artisan make:controller NewController
```

- Menambahkan extends ke `BadasoBaseController` pada controller yang baru di buat.

```
<?php

namespace App\Http\Controllers;

class NewController extends Uasoft\Badaso\Controllers\BadasoBaseController
{
    //...
}
```

- Menimpa method `BadasoBaseController`. Berikut method yang tersedia.
    - all
    - read
    - edit
    - add
    - delete

- Edit CRUD pada CRUD Management, tambahkan controller yang baru di buat.