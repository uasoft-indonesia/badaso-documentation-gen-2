---
title: Custom Page
description: 'Detail about custom page'
position: 5
category: 'Customization'
version: 1
---

Badaso uses the VueJS framework for the Frontend and [Vue-Router](https://router.vuejs.org/) for routing. Therefore, adding pages to the frontend also uses VueJS. The block below is a directory structure for adding a new pages to the frontend.

## Add Custom Page

- To add a pages, add it to the `pages` directory.

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 pages 
┃ ┃ ┃ ┃ ┣ 📂 {your-page} /** create your own pages here **/
┃ ┃ ┃ ┃ ┃ ┣ 📜 browse.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 read.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 edit.vue
┃ ┃ ┃ ┃ ┃ ┣ 📜 add.vue
┃ ┃ ┃ ┃ ┃ ┗ 📜 sort.vue
```

- To access the new pages, the user must add a router to the router directory.

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 routers   /** create your own router .js here **/
┃ ┃ ┃ ┃ ┣ 📂 admin  /** router page that using admin layout **/
┃ ┃ ┃ ┃ ┣ 📂 auth   /** router page that using auth layout **/
┃ ┃ ┃ ┃ ┣ 📂 others /** router page that using your custom layout **/
┃ ┃ ┃ ┃ ┗ 📂 public /** router page that using public layout **/
```