---
title: Additional CSS and JS
description: 'Detail tentang menambahkan file css atau js baru'
position: 3
category: 'Customization'
version: 1
---

## CSS

Badaso menggunakan SCSS sebagai tool untuk pengaturan tampilan. Anda bisa menambahkan penyesuaian css di dalam direktori `scss` seperti struktur di bawah. Anda bisa langsung menambahkan css di dalam `custom.scss` atau membuat file scss baru dan import ke dalam `custom.scss`. Badaso hanya membaca file `custom.scs`.

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┃ ┣ 📂 scss
┃ ┃ ┃ ┃ ┃ ┗ 📜 custom.scss
```

## JS

Untuk menambahkan JS lain seperti vanilla JS atau library lainnya dapat dilakukan seperti menginstall library JS biasa pada laravel.
- Untuk penambahan library, install library seperti biasa pada root project laravel.
- Untuk penambahan Script JS lainnya, dapat dipasang pada semua JS badaso sesuai kebutuhan.