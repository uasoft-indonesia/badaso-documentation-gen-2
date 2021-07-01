---
title: Custom Language
description: 'Detail tentang custom language'
position: 54
category: 'Customization'
version: 1
---

Badaso juga mendukung untuk kustomisasi bahasa. Badaso menggunakan plugin [Vue-i18n by Kazupon](https://kazupon.github.io/vue-i18n/) untuk internasionalisasi. Blok di bawah ini adalah struktur direktori untuk menambahkan bahasa baru atau untuk mengganti (override) terjemahan bahasa saat ini.

## Menambahkan atau Override Bahasa

Untuk menambahkan bahasa baru, anda bisa membuat file js di dalam direktori lang yang disediakan badaso seperti struktur dibawah. 
```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┣ 📜 lang.js /** Your lang here **/
```

File tersebut harus berisi 2 variable yang di eksport. Contoh: fr.js
```
export const label = 'France'
export default {
};

```

Variable defaulr adalah struktur object bahasa dan label adalah variable yang digunakan sebagai option pada dropdown pemilihan bahasa di dashboard.
Bahasa yang ditambahkan akan otomatis terdaftar pada dropdown pemilihan bahasa.

## Overriding Bahasa

Badaso menyediakan bahasa Inggris dan Indonesia. Anda bisa menimpa label-label yang disediakan dengan membuat file id.js dan en.js di dalam direktori lang. Untuk ini, tidak diperlukan variable `label. Anda dapat menemukan struktur object lang badaso pada struktur dibawah.
```
📦 Your Project
┣ 📂 vendor
┃ ┣ 📂 uasoft-indonesia
┃ ┃ ┣  📂 badaso
┃ ┃ ┃ ┣ 📂 src
┃ ┃ ┃ ┃ ┣ 📂 resources
┃ ┃ ┃ ┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 modules
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜 id.js
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜 en.js
```
Ikuti struktur object untuk menimpa atau tambahkan property baru untuk menambahkan label baru