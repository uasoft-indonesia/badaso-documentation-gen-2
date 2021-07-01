---
title: Helpers
description: 'Bagian helpers badaso'
position: 39
category: 'Core Concept'
version: 1
---

## Javascript

### `formatDate`

Badaso menyediakan utilitas helper untuk mengubah tanggal sesuai dengan format yang ditentukan. Konfigurasi format tanggal dapat diubah pada file ```.env```.

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

### `isObjectEmpty`

Helper berikut digunakan untuk memeriksa apakah sebuah nilai object adalah kosong atau tidak.

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

### `CaseConvert`

Badaso menyediakan sebuah helper untuk mengubah case key dari sebuah array dan property dari sebuah object menjadi kasus yang ditentukan.

```PHP
CaseConvert::camel($object)
```

```PHP
CaseConvert::snake($object)
```

```PHP
CaseConvert::pascal($object)
```

Berikut ini merupakan contoh output dari helper tersebut.

```json
input: {
    "product_id": 1
}

output: {
    "productId": 1
}
```

### `AuthenticatedUser`

Helper berikut merupakan helper untuk mendapatkan informasi terkait user yang login atau pemanggil API menggunakan JWT token. Informasi yang tersedia yaitu informasi user, role dan permission.

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

### `ApiResponse`

Helper ApiResponse merupakan helper untuk membuat output API dari controller sesuai standar Badaso.

```PHP
ApiResponse::success($reponse_data)
```

```PHP
ApiResponse::failed($reponse_data)
```