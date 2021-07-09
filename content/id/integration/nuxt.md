---
title: Nuxt
description: 'Detail about integration with nuxt.js'
position: 58
category: 'Integrations'
version: 1
---

Nuxt.js adalah *framework* aplikasi web *open source* dan gratis berdasarkan Vue.js, Node.js, Webpack dan Babel.js. Nuxt terinspirasi oleh Next.js, yang merupakan *framework* dengan tujuan serupa, berdasarkan React.js.

## Pengenalan

Saat membangun aplikasi web frontend menggunakan Nuxt, badaso menyediakan *helper module* untuk menjembatani aplikasi antara nuxt.js dengan badaso. Untuk detailnya, lihat modul [@badaso/nuxt](https://github.com/uasoft-indonesia/badaso-nuxt).

## Integrasi

### Persyaratan

- [Laravel](https://laravel.com/) - Kamu harus menginstal laravel project dengan badaso.
- [Badaso](https://github.com/uasoft-indonesia/badaso) - Kamu perlu menginstal badaso versi terbaru berdasarkan versi laravel yang di instal (baik 1.x atau 2.x).

### Instalasi

Tambahkan [@badaso/nuxt](https://github.com/uasoft-indonesia/badaso-nuxt) di *project*-mu dengan npm atau yarn seperti berikut ini:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @badaso/nuxt
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @badaso/nuxt
  ```

  </code-block>
</code-group>

Lalu, tambahkan @badaso/nuxt pada bagian *modules* di nuxt.config.js seperti di bawah ini:

```js [nuxt.config.js]
export default {
  modules: ['@badaso/nuxt'],
  badaso: {}
}
```

### Options

### `endpoint`

- tipe: `String`
- default: `process.env.BADASO_URL || 'http://localhost:8000'`

URL dari server badaso. Environment variable BASE_URL dapat digunakan untuk menggantikan opsi `endpoint`.

### `entities`

- tipe: `Object`
- default: `{}`

Kamu dapat menentukan entitas yang ada di API backend. Sebagai contoh:

```js [nuxt.config.js]
export default {
  badaso: {
    entities: {
      blog: true,
      crud: ['articles', 'products']
    }
  }
}
```

Lalu kamu dapat menggunakan `this.$badaso.$blog.browse()` pada aplikasimu. Untuk sekarang, entitas hanya menerima opsi:
- `blog`
  - tipe: `Boolean`
  - default: `false`
- `content`
  - tipe: `Boolean`
  - default: `false`
- `crud`
  - tipe: `Array`
  - default: `[]`

### `key`

- tipe: `String`
- default: `token`

*Key* yang digunakan untuk nama cookie serta *key* localStorage/sessionStorage.

### `prefix`

- tipe: `String`
- default: `badaso-api`

URL prefix untuk mengakses badaso API server.

## Contoh

### Otentikasi

Bayangkan jika kamu mempunyai sebuah *auth page* (login dan register) di dalam *project* nuxt-mu. Sebagai contoh, pada halaman login kamu dapat menggunakan *module* seperti dibawah:

```vue [pages/login.vue]
<script>
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      // Kamu dapat menggunakan fungsi login seperti ini
      // atau menggunakan fungsi async await
      this.$badaso.login({ 
        email: this.email, 
        password: this.password
      })
      .then(res => {
        // Handle response
      })
      .catch(err => {
        // Handle error
      })
    }
  }
</script>

<template>
  <div>
    <label>Email</label>
    <input type="text" v-model="email" placeholder="Email">

    <label>Password</label>
    <input type="password" v-model="password" 
    placeholder="Password">

    <button @click="login">Login</button>
  </div>
</template>
```

Untuk registrasi, kamu dapat menggunakan *module* seperti dibawah:

```vue [pages/register.vue]
<script>
  data() {
    return {
      email: null,
      name: null,
      password: null,
      passwordConfirmation: null
    }
  },
  methods: {
    register() {
      // Kamu dapat menggunakan fungsi register seperti ini
      // atau menggunakan fungsi async await
      this.$badaso.register({ 
        email: this.email, 
        name: this.name, 
        password: this.password
        passwordConfirmation: this.passwordConfirmation
      })
      .then(res => {
        // Handle response
      })
      .catch(err => {
        // Handle error
      })
    }
  }
</script>

<template>
  <div>
    <label>Email</label>
    <input type="text" v-model="email">

    <label>Name</label>
    <input type="text" v-model="name">

    <label>Password</label>
    <input type="password" v-model="password">

    <label>Confirm Password</label>
    <input type="password" v-model="passwordConfirmation">

    <button @click="register">Register</button>
  </div>
</template>
```

Anda dapat melihat dokumentasi lengkap di [@badaso/nuxt](https://github.com/uasoft-indonesia/badaso-nuxt) untuk detail tentang semua metode yang disediakan *module* ini.