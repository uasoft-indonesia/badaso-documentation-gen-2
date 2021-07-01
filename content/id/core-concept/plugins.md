---
title: Plugins
description: 'Bagian plugins badaso'
position: 45
category: 'Core Concept'
version: 1
---

Untuk membuat plugin badaso, Anda harus memahami cara membuat paket laravel terlebih dahulu. Anda bisa mempelajarinya [disini](https://laravelpackage.com/).

## Penamaan

Plugin Badaso menggunakan slug untuk penamaannya, contoh: **badaso-blog-module**. Plugin itu sendiri harus setingkat dengan direktori badaso core agar bisa mendeteksi plugin oleh badaso core, contoh:

```
📦 uasoft-indonesia
┣ 📂 badaso
┣ 📂 badaso-example-plugin /** Your plugins here **/
```

## Mendaftarkan Plugin

Untuk mendeteksi plugin, Anda harus menyertakannya dalam file .env pada variabel **MIX_BADASO_PLUGINS** dengan pembatas koma (,) tanpa spasi. Sebagai contoh:

```
MIX_BADASO_PLUGINS=badaso-blog-module,badaso-content-module
```

<alert>
Jika plugin menggunakan menu di sidebar, Anda harus mendaftarkannya ke dalam **MIX_BADASO_MENU** untuk menampilkannya dengan pembatas koma (,) tanpa spasi. Sebagai contoh:

```
MIX_BADASO_MENU=badaso-blog-module,badaso-content-module
```
</alert>

## Struktur Direktori Resources

Di bawah ini adalah struktur direktori resources untuk plugin dari badaso.

```
📦 uasoft-indonesia
┣ 📂 badaso
┣ 📂 badaso-example-plugin
┃ ┣ 📂 src
┃ ┃ ┣ 📂 resources
┃ ┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┃ ┣ 📂 api
┃ ┃ ┃ ┃ ┃ ┣ 📂 modules               /** Daftarkan api helper Anda disini. **/
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜 badaso-example.js   /** Contoh dari api helper. **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** File ini wajib. **/
┃ ┃ ┃ ┃ ┣ 📂 components
┃ ┃ ┃ ┃ ┃ ┣ 📜 example-component.vue /** Contoh dari components. **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** Ekspor components disini. File ini wajib. **/
┃ ┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┃ ┣ 📂 modules
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜 en.js               /** Contoh dari penginternasionalan **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** Ekspor badaso disini. File ini wajib. **/
┃ ┃ ┃ ┃ ┣ 📂 pages
┃ ┃ ┃ ┃ ┃ ┣ 📂 example
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js              /** Ekspor pages disini. File ini wajib. **/
┃ ┃ ┃ ┃ ┣ 📂 router
┃ ┃ ┃ ┃ ┃ ┗ 📜 routes.js *           /** Ekspor router disini. File ini wajib. **/
┃ ┃ ┃ ┃ ┣ 📂 store
┃ ┃ ┃ ┃ ┃ ┗ 📜 badaso.js *           /** Ekspor store disini. File ini wajib. **/
┃ ┃ ┃ ┃ ┣ 📂 utils
┃ ┃ ┃ ┃ ┃ ┗ 📜 example.js *          /** Ekspor utils disini. **/
```

<alert type="warning">
Untuk penamaan file router harus menggunakan routes.js dan file store harus menggunakan badaso.js.
</alert>

<alert>
<code>*</code> akan di deteksi otomatis oleh badaso core.

Jika Anda ingin menggunakan assets dan utils, Anda dapat membuat folder assets dan utils, tetapi folder tersebut hanya berpengaruh pada lingkup plugin Anda, bukan lingkup badaso core.
</alert>

### `src\resources\js\pages\index.vue`

Berikut adalah konten index.vue di direktori pages.

```vue
<template>
  <component
    v-if="globalComponentList[defaultComponent]"
    v-bind:is="globalComponentList[defaultComponent]"
  ></component>
  <component v-else v-bind:is="defaultComponent"></component>
</template>

<script>
import Example from "./example/index.vue";

export default {
  components: {
    // Register the pages here
    Example
  },
  name: "ExamplePlugin",
  data: () => ({
    globalComponentList: {},
    defaultComponent: null,
  }),
  mounted() {
    const routeName = this.$route.name;
    const componentName = this.$caseConvert.kebab(routeName);
    const slug = this.$route.params ? this.$route.params.slug : "";

    this.globalComponentList = this.constructor.superOptions.components;

    this.defaultComponent = componentName;
  },
  methods: {},
};
</script>
```