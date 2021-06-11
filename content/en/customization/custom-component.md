---
title: Custom Component
description: 'Detail about custom component'
position: 10
category: 'Customization'
version: 1
---

Badaso uses the VueJS framework for the frontend. Therefore, adding components to the frontend also uses VueJS. The block below is a directory structure for adding a new component to the frontend.

## Add a Component

- To add a component, add it to the `components` directory.

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 components /** you can add a component here **/
┃ ┃ ┃ ┃ ┗ 📜 ExampleComponent.vue
```

- Now you can use that custom component in your pages like below.

<alert>
Custom Components will be imported automatically and can be used directly if the file naming uses the pascal case.
</alert>

```vue
<template>
  ...
  <example-component></example-component>
  ...
</template>
```
