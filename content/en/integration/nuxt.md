---
title: Nuxt
description: 'Detail about integration with nuxt.js'
position: 58
category: 'Integrations'
version: 1
---

Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js. Nuxt is inspired by Next.js, which is a framework of similar purpose, based on React.js.

## Introduction

When building a frontend web app using Nuxt, badaso provides a helper module to bridge the app. For the details, check out the [@badaso/nuxt](https://github.com/uasoft-indonesia/badaso-nuxt) module.

## Integration

### Prerequisites

- [Laravel](https://laravel.com/) - You need to have the laravel project with badaso installed.
- [Badaso](https://github.com/uasoft-indonesia/badaso) - You need to install badaso latest version based on your laravel version (either 1.x or 2.x).

### Installation

Add [@badaso/nuxt](https://github.com/uasoft-indonesia/badaso-nuxt) to your project via npm or yarn like so below:

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

Then, add @badaso/nuxt to the modules section of nuxt.config.js. You can use either of the following ways to specify the module options:

```js [nuxt.config.js]
export default {
  modules: ['@badaso/nuxt'],
  badaso: {}
}
```

### Options

### `endpoint`

- type: `String`
- default: `process.env.BADASO_URL || 'http://localhost:8000'`

URL of the badaso server. Environment variable BADASO_URL can be used to override `endpoint` options.

### `entities`

- type: `Object`
- default: `{}`

You can specify the entities that present in your API. For example:

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

Then you can use `this.$badaso.$blog.browse()` in your application. For now, entities only accept:
- `blog`
  - type: `Boolean`
  - default: `false`
- `content`
  - type: `Boolean`
  - default: `false`
- `crud`
  - type: `Array`
  - default: `[]`

### `key`

- type: `String`
- default: `token`

Key used for the cookie name as well as localStorage/sessionStorage key.

### `prefix`

- type: `String`
- default: `badaso-api`

URL prefix to access badaso API server.

## Example

### Authentication

Imagine that you have an auth page (login and register) inside your nuxt project like below:

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
      // You can use the login function like this 
      // or using async await function
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

For the registration, you can use the module like below:

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
      // You can use the regiter function like this 
      // or using async await function
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

You can check out the full documentation on [@badaso/nuxt](https://github.com/uasoft-indonesia/badaso-nuxt/blob/main/README.md) for the details about all the methods that this module provides.