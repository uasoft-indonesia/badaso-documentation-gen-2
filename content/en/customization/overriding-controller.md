---
title: Overriding Controller
description: 'Detail about overriding controller'
position: 49
category: 'Customization'
version: 1
---

Every CRUD generated through the CRUD generator will use the same controller. there are times when this controller needs adjustments, such as adding logic that is not provided by Badaso.

To create a new controller and use it in the generated CRUD (overridding), there are several steps that need to be done.

- Create a laravel controller as usual.
```
php artisan make:controller NewController
```

- Extends the controller to `BadasoBaseController`.

```
<?php

namespace App\Http\Controllers;

class NewController extends Uasoft\Badaso\Controllers\BadasoBaseController
{
    //...
}
```

- Overrides the `BadasoBaseController` method. The following methods are available for overrides.
    - all
    - read
    - edit
    - add
    - delete
    
- Edit CRUD in CRUD Management, add the new controller created.