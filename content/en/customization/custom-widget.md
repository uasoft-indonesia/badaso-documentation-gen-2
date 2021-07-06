---
title: Custom Widget
description: 'Detail about customization widget'
position: 53
category: 'Customization'
version: 1
---

Badaso supports creating and displaying widgets on the dashboard page. Badaso also provides default widget (user, role and permission widget). Here's what the widget looks like.

![widget](custom-widget/widget.png)

## Add Widget

- Create a php file in the `app\Widgets` folder (if the folder does not exist, then create a folder first). Then fill in the file with the following template.

```
📦Your Project
┣ 📂app
┃ ┣ 📂Widgets /** register your widget here **/
┃ ┃ ┗ 📜ExampleWidget.php
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
            'label' => 'Label', /** Fill in the label as desired **/
            'value' => 0,       /** Fill in the value as desired **/
        ];
    }
}
```

- Then add the file or class you just created to the configuration file `config\badaso.php`.

```php
<?php

return [
    ...
    'widgets' => [
        'Uasoft\\Badaso\\Widgets\\UserWidget',
        'Uasoft\\Badaso\\Widgets\\RoleWidget',
        'Uasoft\\Badaso\\Widgets\\PermissionWidget',
        'App\\Widgets\\ExampleWidget', /** Register the widget here **/
    ],
];
```