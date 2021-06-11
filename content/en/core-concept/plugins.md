---
title: Plugins
description: 'Badaso plugins section'
position: 12
category: 'Core Concept'
version: 1
---

To create a badaso plugin, you must understand how to create a laravel packages first. You can learn about it [here](https://laravelpackage.com/).

## Naming

Badaso plugin uses slug for naming, for example: **badaso-blog-module**. The plugin itself must be in-line with badaso core directory in order detect the plugin by badaso core, for example:

```
📦 uasoft-indonesia
┣ 📂 badaso
┣ 📂 badaso-example-plugin /** Your plugins here **/
```

## Registering the Plugin

To detect the plugin, you must include it in .env file on **MIX_BADASO_MODULES** variable with delimiter of comma (,) without whitespace. For example:

```
MIX_BADASO_MODULES=badaso-blog-module,badaso-content-module
```

<alert>
If the plugin using the menu in sidebar, you must include it in <b>MIX_BADASO_MENU</b> in order to display it with delimiter of comma (,) without whitespace. For example:

```
MIX_BADASO_MENU=badaso-blog-module,badaso-content-module
```
</alert>

## Resources Directory Structure

Below is the resources directory structure for plugins from badaso.

```
📦 uasoft-indonesia
┣ 📂 badaso
┣ 📂 badaso-example-plugin
┃ ┣ 📂 src
┃ ┃ ┣ 📂 resources
┃ ┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┃ ┣ 📂 api
┃ ┃ ┃ ┃ ┃ ┣ 📂 modules               /** Register your api helper here. **/
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜 badaso-example.js   /** Example of api helper. **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 components
┃ ┃ ┃ ┃ ┃ ┣ 📜 example-component.vue /** Example of components. **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** Export the components here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┃ ┣ 📂 modules
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜 en.js               /** Example of internationalization **/
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js *            /** Export the language here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 pages
┃ ┃ ┃ ┃ ┃ ┣ 📂 example
┃ ┃ ┃ ┃ ┃ ┗ 📜 index.js              /** Export the pages here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 router
┃ ┃ ┃ ┃ ┃ ┗ 📜 routes.js *           /** Export the router here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 store
┃ ┃ ┃ ┃ ┃ ┗ 📜 badaso.js *           /** Export the store here. This file is required. **/
┃ ┃ ┃ ┃ ┣ 📂 utils
┃ ┃ ┃ ┃ ┃ ┗ 📜 example.js *          /** Export the utils here. **/
```

<alert type="warning">

Router file naming must use routes.js and file store must use badaso.js.

</alert>

<alert>

<code>*</code> is auto-detect by badaso core.

If you want to use assets and utils, you can create assets and utils folder, but the folder only affect in your plugin scope, not badaso core scope.

</alert>

### `src\resources\js\pages\index.vue`

Here is the content of index.vue in pages directory.

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