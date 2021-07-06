---
title: Helpers
description: 'Badaso helpers section'
position: 39
category: 'Core Concept'
version: 1
---

## Javascript

### ```formatDate```

Badaso provides a helper utility to change the date according to the specified format.
The date format configuration can be changed in the file ```.env```.

<code-group>
  <code-block label="Template" active>

  ```vue
  $helper.formatDate(date)
  ```

  </code-block>
  <code-block label="Script">

  ```vue
  this.$helper.formatDate(date)
  ```

  </code-block>
</code-group>

### ```isObjectEmpty```

The following helper is used to check whether an object value is empty or not.

<code-group>
  <code-block label="Template" active>

  ```vue
  $helper.isObjectEmpty
  ```

  </code-block>
  <code-block label="Script">

  ```vue
  this.$helper.isObjectEmpty
  ```

  </code-block>
</code-group>

## PHP

### ```CaseConvert```

Badaso provides a helper for converting the case keys of an array and the properties of an object to specified cases.

```PHP
CaseConvert::camel($object)
```

```PHP
CaseConvert::snake($object)
```

```PHP
CaseConvert::pascal($object)
```

The following is an example of the output of the helper.

```json
input: {
    "product_id": 1
}

output: {
    "productId": 1
}
```

### ```AuthenticatedUser```

The following helper is a helper to get information related to an incoming user or API caller using the JWT token. The information that available is user information, role and permissions.


```PHP
AuthenticatedUser::getUser()
```

```PHP
AuthenticatedUser::getRoles($user_id)
```

```PHP
AuthenticatedUser::getPermissions($user_id)
```

```PHP
AuthenticatedUser::isAllowedTo($permissions_string)
```

### ```ApiResponse```

Helper ```ApiResponse``` is a helper for generating API output from the controller according to Badaso standards.

```PHP
ApiResponse::success($reponse_data)
```

```PHP
ApiResponse::failed($reponse_data)
```