---
title: Custom Utilities
description: 'Detail tentang customization utilities'
position: 55
category: 'Customization'
version: 1
---

Badaso juga mendukung untuk kustomisasi utilitas. Blok di bawah ini adalah struktur direktori untuk menambahkan utilitas baru.

## Menambahkan Utilitas

- Untuk menambahkan utilitas, tambahkan ke direktori `utils`.

```
📦 Your Project
 ┣ 📂 resources
 ┃ ┣ 📂 js
 ┃ ┃ ┣ 📂 badaso
 ┃ ┃ ┃ ┣ 📂 utils /** you can add a utility here **/
 ┃ ┃ ┃ ┃ ┣ 📜 example-utils.js /** example one **/
 ┃ ┃ ┃ ┃ ┗ 📜 exampleutils.js /** example two **/
```

- Untuk menggunakan utilitas yang baru saja ditambahkan, Anda dapat mencoba menggunakan sintaks di bawah ini.

<alert type="warning">
Penamaan di Badaso menggunakan camel case. Misalnya example-utils akan menjadi exampleUtils.
</alert>


<code-group>
  <code-block label="Template" active>

  ```vue
  $exampleUtils.method();
  $exampleutils.method();
  ```

  </code-block>
  
  <code-block label="Script">

  ```vue
  this.$exampleUtils.method();
  this.$exampleutils.method();
  ```

  </code-block>
</code-group>