---
title: Custom Widget
description: 'Detail tentang customization widget'
position: 6
category: 'Customization'
version: 1
---

Badaso mendukung untuk membuat dan menampilkan widget pada halaman dashboard. Badaso juga menyediakan widget default (widget user, role dan permission). Berikut tampilan dari widget tersebut.

![widget](assets/widget.png)

## Menambahkan Widget

- Buat sebuah file php pada folder `app\Widgets` (jika folder belum ada, maka buat folder terlebih dahulu). Lalu isi file tersebut dengan template berikut.

```
📦 Your Project
┣ 📂 app
┃ ┣ 📂 Widgets /** register your widget here **/
┃ ┃ ┗ 📜 ExampleWidget.php
```

```php
<?php

namespace App\Widgets;

use Uasoft\Badaso\Interfaces\WidgetInterface;

class ExampleWidget implements WidgetInterface
{
    /**
     * Set permission for widget
     * set null to allow all role
     * multiple permission allowed, separate by comma.
     */
    public function getPermissions()
    {
        return 'browse_permissions';
    }
    
    public function run($params = null)
    {
        return [
            'label' => 'Label', /** Isi label sesuai keinginan **/
            'value' => 0,       /** Isi value sesuai keinginan **/
        ];
    }
}
```

- Kemudian tambahkan file atau class yang baru dibuat ke dalam file konfigurasi `config\badaso.php`.

```php
<?php

return [
    ...
    'widgets' => [
        'Uasoft\\Badaso\\Widgets\\UserWidget',
        'Uasoft\\Badaso\\Widgets\\RoleWidget',
        'Uasoft\\Badaso\\Widgets\\PermissionWidget',
        'App\\Widgets\\ExampleWidget', /** Daftarkan widget disini **/
    ],
];
```