---
title: Custom Page
description: 'Detail tentang custom page'
position: 5
category: 'Customization'
version: 1
---

Badaso menggunakan framework VueJS untuk Frontend dan [Vue-Router](https://router.vuejs.org/) untuk routing. Maka dari itu untuk menambahkan page pada frontend juga menggunakan VueJS. Blok di bawah adalah struktur direktori untuk menambahkan page baru pada frontend.

## Menambahkan Halaman baru

- Untuk menambahkan halaman, buat vue component di dalam direktori `pages` seperti struktur berikut

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

- Untuk mengakses page, pengguna harus menambahkan router pada direktori router.

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